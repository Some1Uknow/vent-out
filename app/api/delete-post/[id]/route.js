import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await connectDB();
  const postId = params.id;
  
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    await Post.findByIdAndDelete(postId);
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
