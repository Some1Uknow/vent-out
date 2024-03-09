import connectDB from "@/lib/mongodb";
import profileSchema from "@/models/profile";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { bio, age, gender, country } = await request.json();
  await connectDB();
  await profileSchema.create({ bio, age, gender, country });
  return NextResponse.json({message: "Profile Created"}, {status: 201})
}
