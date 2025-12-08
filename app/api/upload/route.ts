import { parseResumeText } from "@/utils/parseText";
import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import pdf from "pdf-parse-fixed";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const rawText = await pdf(buffer);
    console.log(rawText.text);

    const parsedData = await parseResumeText(rawText.text);
    console.log("Parsed Data:", parsedData);

    return NextResponse.json({
      message: parsedData,
    });
  } catch (error) {
    console.error("Error handling upload:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
