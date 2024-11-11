import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');
  // Check file
  if (!file) {
    return NextResponse.json({
      message: "File upload failed. No file found.",
      success: false,
    })
}
     // Convert the file to a Buffer
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/upload${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({
        message: "File uploaded successfully.",
        success: true,
      });

    
    
   
    // try {
    //   await writeFile(uploadPath, buffer);
    //   return NextResponse.json({
    //     message: "File uploaded successfully.",
    //     success: true,
    //   });
    // }catch (error) {
    //     console.error("Error uploading file:", error);
    //     return NextResponse.json({
    //       message: "File upload failed. Error saving the file.",
    //       success: false,
    //     });
      }
     
    