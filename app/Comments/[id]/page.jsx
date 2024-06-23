"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { formatDistanceToNow } from "date-fns";

const Page = ({ params }) => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = params;
  const { data: session, status } = useSession();

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/post/${id}`);
      const data = await res.json();
      setPost(data.post);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?postId=${id}`);
      const data = await res.json();
      setComments(data.commentsList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          postId: id,
          userImage: session.user.image,
          content: comment,
        }),
      });

      const data = await res.json();

      if (data.message === "Comment posted successfully") {
        setComment("");
        fetchComments();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You need to be signed in to view this page</div>;
  }

  return (
    <div className="w-5/6 mx-auto m-2 mt-0 p-2 flex flex-col">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="flex items-center space-x-4">
          <Image
            alt="user-image"
            className="w-10 h-10 rounded-full inline-block"
            src={post?.userImage}
            width={40}
            height={40}
          />
          <div className="text-gray-800">
            <h1 className="font-bold">{post?.author}</h1>
            <p className="text-sm">
              {new Date(post?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <h2 className="mt-2 text-xl font-bold text-gray-800">{post?.title}</h2>
        <p className="mt-1 text-gray-600 text-sm">{post?.description}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Add a comment"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="bg-gray-100 p-2 rounded mb-2">
              <div className="flex items-center space-x-4 mb-2">
                <Image
                  alt="user-image"
                  className="w-10 h-10 rounded-full inline-block"
                  src={comment.userImage}
                  width={40}
                  height={40}
                />
                <div>
                  <h1 className="font-bold">{comment.userId.name}</h1>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(comment.createdAt))} ago
                  </p>
                </div>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
