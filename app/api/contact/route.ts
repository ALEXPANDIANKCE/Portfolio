import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Contact API placeholder. Connect your email provider here.",
  });
}