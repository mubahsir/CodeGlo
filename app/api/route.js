import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req, res) {
  const data = await req.formData();
  const file = data.get("file");

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);

  if (!file) {
    return NextResponse.json({ "message ": "no image found", success: false });
  }

  return NextResponse.json({
    massage: "File uploaded",
    success: true,
  });
}
