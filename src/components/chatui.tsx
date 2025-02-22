"use client";
import { Message, useChat } from "ai/react";
import { Messages } from "./messages";
import { ChatInput } from "./chat-input";

export const ChatUI = ({ sessionId, initialMessages }: { sessionId: string, initialMessages: Message[] }) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: {
        sessionId,
      },
      initialMessages
    });
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>
      <ChatInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} setInput={setInput}/>
    </div>
  );
};
