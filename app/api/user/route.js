import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}
