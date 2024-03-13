import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userImage, author, title, description } = await request.json();
  await connectDB();
  console.log(userImage);
  await Post.create({ author , title, description, userImage });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

export async function GET(request, { params }) {
  await connectDB();
  const authorName = decodeURIComponent(params.name); 
  const post = await Post.find({ author: authorName }); 

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ post }, { status: 200 });
}

