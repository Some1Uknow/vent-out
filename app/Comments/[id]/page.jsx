"use client";
import { useState } from "react";
import Image from "next/image";

const CommentList = ({ params }) => {
  const postId = params.id;

  const [post, setPost] = useState({
    id: postId,
    title: "Struggling with Anxiety",
    content:
      "Today, I wanted to share my experience with anxiety and how it impacts my daily life. It can be overwhelming at times, but I'm grateful for the support I have.",
    user: { id: 0, name: "Samantha", image: "https://via.placeholder.com/80" },
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      postId: postId,
      text: "Thank you for sharing your story, Samantha. I also struggle with anxiety, and it helps to know that I'm not alone. Sending you lots of love and support!",
      user: { id: 1, name: "Alice", image: "https://via.placeholder.com/40" },
    },
    {
      id: 2,
      postId: postId,
      text: "You're so brave for opening up about your anxiety. Remember, you're stronger than you think, and we're all here for you!",
      user: { id: 2, name: "John", image: "https://via.placeholder.com/40" },
    },
    {
      id: 3,
      postId: postId,
      text: "Thank you for sharing, Samantha. Your story resonates with so many of us. Keep staying strong!",
      user: { id: 3, name: "Emma", image: "https://via.placeholder.com/40" },
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          postId: postId,
          text: newComment,
          user: {
            id: 4,
            name: "Anonymous",
            image: "https://via.placeholder.com/40",
          },
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="mx-60 font-Poppins mt-8">
      <div className="border p-4 my-2">
        <div className="flex items-center p-2 mb-2">
          <Image
            src={post.user.image}
            alt={post.user.name}
            className="rounded-full mr-2"
            width={80}
            height={80}
          />
          <span className="font-bold text-3xl">{post.user.name}</span>
        </div>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p>{post.content}</p>
      </div><div className="bg-gray-50 p-2 rounded-xl py-6">
      {comments.map((comment) => (
        <div key={comment.id} className="border p-4 my-2 w-4/5 mx-10 bg-white">
          <div className="flex items-center mb-2">
            <img
              src={comment.user.image}
              alt={comment.user.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-bold">{comment.user.name}</span>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
      <div className="mt-4 mx-10 border-2 w-4/5 h-max rounded-xl flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment..."
          className="border py-6 px-4 w-4/5 h-full"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 text-2xl py-5 w-1/5"
        >
          Add Comment
        </button>
      </div></div>
    </div>
  );
};

export default CommentList;
