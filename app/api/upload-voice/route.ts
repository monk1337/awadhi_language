import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audio = formData.get("audio") as File | null;
    const sentenceId = formData.get("sentence_id") as string;
    const sessionId = formData.get("session_id") as string;
    const district = formData.get("district") as string;
    const ageGroup = formData.get("age_group") as string;
    const gender = formData.get("gender") as string;
    const duration = formData.get("duration") as string;

    if (!audio || !sentenceId) {
      return NextResponse.json(
        { error: "Missing audio or sentence_id" },
        { status: 400 },
      );
    }

    // Generate unique file path
    const timestamp = Date.now();
    const filePath = `${sessionId}/${sentenceId}_${timestamp}.wav`;

    // Upload audio to Supabase Storage
    const arrayBuffer = await audio.arrayBuffer();
    const { error: uploadError } = await supabaseAdmin.storage
      .from("recordings")
      .upload(filePath, arrayBuffer, {
        contentType: "audio/wav",
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return NextResponse.json(
        { error: "Failed to upload audio" },
        { status: 500 },
      );
    }

    // Save metadata to Postgres
    const { error: dbError } = await supabaseAdmin
      .from("recordings")
      .insert({
        sentence_id: parseInt(sentenceId),
        session_id: sessionId,
        district: district || null,
        age_group: ageGroup || null,
        gender: gender || null,
        duration: parseInt(duration) || 0,
        file_path: filePath,
        file_size: audio.size,
      });

    if (dbError) {
      console.error("Database insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save recording metadata" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, filePath });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 },
    );
  }
}
