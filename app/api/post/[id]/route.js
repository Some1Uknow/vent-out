import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const post = await Post.findById(id);
  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 400 });
  }
  return NextResponse.json({post}, { status: 400 });
}
