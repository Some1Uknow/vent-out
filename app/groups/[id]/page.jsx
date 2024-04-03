"use client";
import { useState } from "react";
import Image from "next/image";

const GroupChat = ({ params }) => {
  const groupName = params.id;

  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", text: "Hello everyone!" },
    { id: 2, user: "Bob", text: "Hi Alice!" },
    { id: 3, user: "Charlie", text: "Hey there!" },

    { id: 13, user: "Alice", text: "How's everyone doing today?" },
    { id: 14, user: "Charlie", text: "I'm good, thanks!" },
    { id: 15, user: "You", text: "I'm doing great!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: "You", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full mx-40 mt-6">
      <div className="flex items-center p-4 border-b">
        <div className="mr-4">
          <Image
            src="https://via.placeholder.com/80"
            alt="Group Image"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{decodeURIComponent(groupName)}</h1>
          <p className="text-sm text-gray-500">Members: 10</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-gray-50 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.user === "You" ? "justify-end" : "justify-start"
            } mb-1`}
          >
            <div
              className={`rounded-lg p-2 max-w-xs ${
                message.user === "You"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between p-2 border-t">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 mr-2 border rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
