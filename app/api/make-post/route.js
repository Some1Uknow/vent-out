import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Post.create({ title, description });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}
