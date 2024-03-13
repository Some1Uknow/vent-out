import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectDB();
    const posts = await Post.find({}); 
  
    if (!posts || posts.length === 0) {
      return NextResponse.json({ message: "No posts found" }, { status: 404 });
    }
  
    return NextResponse.json({ posts }, { status: 200 });
}
