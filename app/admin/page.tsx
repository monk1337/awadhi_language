"use client";

import { useState, useEffect, useCallback } from "react";

interface Recording {
  id: string;
  sentence_id: number;
  session_id: string;
  district: string | null;
  age_group: string | null;
  duration: number;
  file_path: string;
  file_size: number;
  created_at: string;
}

interface Stats {
  total: number;
  uniqueSessions: number;
  uniqueSentences: number;
  byDistrict: Record<string, number>;
  byAgeGroup: Record<string, number>;
  totalSizeMB: number;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/recordings", {
        headers: { "x-admin-key": password },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setAuthenticated(false);
          setError("Invalid admin key");
          return;
        }
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setRecordings(data.recordings);
      setStats(data.stats);
    } catch {
      setError("Failed to load recordings");
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (authenticated) fetchData();
  }, [authenticated, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) setAuthenticated(true);
  };

  const playRecording = async (rec: Recording) => {
    try {
      const res = await fetch(
        `/api/admin/play?path=${encodeURIComponent(rec.file_path)}`,
        { headers: { "x-admin-key": password } },
      );
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      setPlayingId(rec.id);
      audio.onended = () => {
        setPlayingId(null);
        URL.revokeObjectURL(url);
      };
      audio.play();
    } catch {
      setError("Failed to play recording");
    }
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatSize = (bytes: number) =>
    bytes > 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)}MB`
      : `${(bytes / 1024).toFixed(0)}KB`;

  // Login screen
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream p-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 rounded-xl border border-parchment bg-cream-dark p-8"
        >
          <h1 className="font-playfair text-2xl font-bold text-charcoal">
            Admin Dashboard
          </h1>
          <p className="text-sm text-slate">
            Enter your Supabase service key to access recordings.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Service key"
            className="w-full rounded-lg border border-parchment bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron/50"
          />
          {error && <p className="text-sm text-terracotta">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-charcoal px-4 py-3 text-sm font-semibold text-cream transition-colors hover:bg-charcoal-light"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-6 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="font-playfair text-3xl font-bold text-charcoal">
            Voice Recordings
          </h1>
          <button
            onClick={fetchData}
            disabled={loading}
            className="rounded-lg bg-saffron px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-saffron-dark disabled:opacity-50"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {/* Stats cards */}
        {stats && (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Total Recordings</p>
              <p className="mt-1 font-data text-2xl text-charcoal">
                {stats.total}
              </p>
            </div>
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Unique Sessions</p>
              <p className="mt-1 font-data text-2xl text-charcoal">
                {stats.uniqueSessions}
              </p>
            </div>
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Unique Sentences</p>
              <p className="mt-1 font-data text-2xl text-charcoal">
                {stats.uniqueSentences}
              </p>
            </div>
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Storage Used</p>
              <p className="mt-1 font-data text-2xl text-charcoal">
                {stats.totalSizeMB.toFixed(1)}MB
              </p>
            </div>
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Top District</p>
              <p className="mt-1 text-sm font-semibold text-charcoal">
                {Object.entries(stats.byDistrict).sort(
                  (a, b) => b[1] - a[1],
                )[0]?.[0] || "—"}
              </p>
            </div>
            <div className="rounded-lg border border-parchment bg-cream-dark p-4">
              <p className="text-xs text-slate">Top Age Group</p>
              <p className="mt-1 text-sm font-semibold text-charcoal">
                {Object.entries(stats.byAgeGroup).sort(
                  (a, b) => b[1] - a[1],
                )[0]?.[0] || "—"}
              </p>
            </div>
          </div>
        )}

        {/* District breakdown */}
        {stats && Object.keys(stats.byDistrict).length > 0 && (
          <div className="mt-6 rounded-lg border border-parchment bg-cream-dark p-4">
            <p className="mb-3 text-xs font-medium text-slate">
              Recordings by District
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(stats.byDistrict)
                .sort((a, b) => b[1] - a[1])
                .map(([dist, count]) => (
                  <span
                    key={dist}
                    className="rounded-full bg-saffron/10 px-3 py-1 text-xs text-saffron-dark"
                  >
                    {dist}: {count}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Recordings table */}
        <div className="mt-6 overflow-x-auto rounded-lg border border-parchment">
          <table className="w-full text-sm">
            <thead className="bg-cream-dark text-left text-xs text-slate">
              <tr>
                <th className="p-3">Sentence ID</th>
                <th className="p-3">District</th>
                <th className="p-3">Age</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Size</th>
                <th className="p-3">Date</th>
                <th className="p-3">Play</th>
              </tr>
            </thead>
            <tbody>
              {recordings.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8 text-center text-slate"
                  >
                    No recordings yet. Share the contribute page to
                    start collecting data.
                  </td>
                </tr>
              )}
              {recordings.map((rec) => (
                <tr
                  key={rec.id}
                  className="border-t border-parchment/60 transition-colors hover:bg-cream-dark/50"
                >
                  <td className="p-3 font-data text-charcoal">
                    #{rec.sentence_id}
                  </td>
                  <td className="p-3 text-charcoal-light">
                    {rec.district || "—"}
                  </td>
                  <td className="p-3 text-charcoal-light">
                    {rec.age_group || "—"}
                  </td>
                  <td className="p-3 font-data text-charcoal-light">
                    {rec.duration}s
                  </td>
                  <td className="p-3 font-data text-charcoal-light">
                    {formatSize(rec.file_size)}
                  </td>
                  <td className="p-3 text-charcoal-light">
                    {formatDate(rec.created_at)}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => playRecording(rec)}
                      disabled={playingId === rec.id}
                      className="rounded-full bg-saffron/10 p-2 text-saffron-dark transition-colors hover:bg-saffron/20 disabled:opacity-50"
                    >
                      {playingId === rec.id ? (
                        <svg
                          className="h-4 w-4 animate-pulse"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {error && (
          <p className="mt-4 text-center text-sm text-terracotta">{error}</p>
        )}
      </div>
    </div>
  );
}
