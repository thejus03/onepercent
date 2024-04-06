'use client'
import ChatButton from "@/components/ChatButton";
import Card from "../components/Card";
import { RightBar } from "../components/RightBar";
import ChatPage from "@/components/chatui";
import { useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen]=useState(false)
  return (
    <main className="flex min-h-screen flex-row justify-between ">
      <div className=" overflow-auto flex flex-col mx-9 w-full h-full items-center justify-center">
        <div className=" space-y-3 w-full max-w-[600px] p-8 mt-12 rounded-2xl flex items-center justify-center">
          <Card />
        </div>
      </div>
      <div className="border-x-2 w-[40%]  h-[93vh] lg:block hidden">
        <RightBar />
      </div>
      <div onClick={()=>setChatOpen(true)} className="fixed left-2 bottom-2">
        <ChatButton />
      </div>
      <div className="fixed left-2 bottom-2">
        {chatOpen && <ChatPage setChatOpen={setChatOpen} />}
      </div>
      
    </main>
  );
}
