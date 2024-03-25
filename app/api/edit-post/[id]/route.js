import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const userId = params.id;
  const { title, description } = await request.json();
  console.log(title, description);
  try {
    await connectDB();

    const updatedPost = await Post.findById(userId);
    if (!updatedPost)
      return NextResponse.json(
        { message: "No post found with given id" },
        { status: 404 }
      );

    updatedPost.title = title;
    updatedPost.description = description;
    await updatedPost.save();

    return NextResponse.json(
      { message: "Successfully updated the post!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error updating post" }, { status: 500 });
  }
}
