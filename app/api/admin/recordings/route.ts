import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  // Simple auth: check service key in header
  const adminKey = request.headers.get("x-admin-key");
  if (adminKey !== process.env.SUPABASE_SERVICE_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch all recordings, newest first
  const { data: recordings, error } = await supabaseAdmin
    .from("recordings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Compute stats
  const sessions = new Set(recordings?.map((r) => r.session_id));
  const sentences = new Set(recordings?.map((r) => r.sentence_id));
  const totalSize = recordings?.reduce((a, r) => a + (r.file_size || 0), 0) || 0;

  const byDistrict: Record<string, number> = {};
  const byAgeGroup: Record<string, number> = {};

  for (const r of recordings || []) {
    if (r.district) byDistrict[r.district] = (byDistrict[r.district] || 0) + 1;
    if (r.age_group) byAgeGroup[r.age_group] = (byAgeGroup[r.age_group] || 0) + 1;
  }

  return NextResponse.json({
    recordings: recordings || [],
    stats: {
      total: recordings?.length || 0,
      uniqueSessions: sessions.size,
      uniqueSentences: sentences.size,
      byDistrict,
      byAgeGroup,
      totalSizeMB: totalSize / (1024 * 1024),
    },
  });
}
