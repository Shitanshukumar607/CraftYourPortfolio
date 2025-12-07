import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    // Here you would handle the file processing logic
    // For example, saving it to disk or uploading to cloud storage
    console.log(`Received file: ${file.name}, size: ${file.size} bytes`);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
      message: "File uploaded successfully",
      filename: file.name,
    });
  } catch (error) {
    console.error("Error handling upload:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
