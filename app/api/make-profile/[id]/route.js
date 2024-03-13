import connectDB from "@/lib/mongodb";
import profileSchema from "@/models/profile";
import { NextResponse } from "next/server";

export async function POST(request, {params}) {
  const { bio, age, gender, country } = await request.json();
  await connectDB();
  await profileSchema.findOneAndUpdate(
    { _id: params.id }, // Find the profile by its ID
    { bio, age, gender, country }, // Update the fields
    { upsert: true } // Create a new document if no document matches the query
  );
  return NextResponse.json({message: "Profile Updated or Created"}, {status: 200})
}

export async function GET(request, { params }) {
  await connectDB();
  const profile = await profileSchema.findById(params.id);

  if (!profile) {
    return NextResponse.json({ message: "Profile not found" }, { status: 404 });
  }

  return NextResponse.json({ profile }, { status: 200 });
}
