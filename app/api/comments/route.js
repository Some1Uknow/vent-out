import { NextResponse } from "next/server";
import comments from "@/models/comments";
import connectDB from "@/lib/mongodb";

export async function POST(request) {
  await connectDB();
  const { userId, postId, userImage, content } = await request.json();
  const posted = await comments.create({
    userId,
    postId,
    userImage,
    content,
  });
  if (posted) {
    return NextResponse.json({
      message: "Comment posted successfully",
      success: true,
    });
  }
  return NextResponse.json({ message: "Can't post comment", success: false });
}

export async function GET(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (!postId) {
    return NextResponse.json(
      { message: "postId is required" },
      { status: 400 }
    );
  }

  try {
    const commentsList = await comments
      .find({ postId })
      .populate("userId", "name");
    console.log(commentsList);
    return NextResponse.json({ commentsList });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
