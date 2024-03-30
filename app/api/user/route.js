import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import profileSchema from "@/models/profile";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectDB();
  await User.create({ name, email });
  return new NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET(request) {
  await connectDB();
  const Users = await profileSchema.find({});
  const Users1 = await User.find({});
  if (!Users || !Users.length) {
    return NextResponse.json({ message: "Cant fetch users" }, { status: 201 });
  }
  return NextResponse.json({ Users, Users1 }, { status: 201 });
}
