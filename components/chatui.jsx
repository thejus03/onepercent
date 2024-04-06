'use client'
import React, { useEffect, useState } from 'react';
import { IoMdSend } from "react-icons/io";
import Image from 'next/image';
function ChatPage() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([{
    "role": "system", "content":"You are a chatbot for the Singapore Government that answers the questions accurately and succinctly to help businesses with their problems. Instructions: - Only answer questions about Singapore government. - If you are unsure about the question, then reply with 'I am not sure'. Context: - In the services page of our website, it has info about govt services. - In the network page, we can connect with other Singapore businesses."
    }]);
    const messageList = [{'role':'user','content':'IM THE STUPID TEXT'},{'role':'assistant','content':'NO'}]
  useEffect(() => {
    //getChats()
  }, [])
  
  const handleSendMessage = async () => {
    setMessages((prev)=>[...prev, {'role':'user','content':inputValue}])
    const response = await fetch('http://127.0.0.1:5000/chatbot',{
        method:'POST',
        body:JSON.stringify({
            messages:messages
      })
      
      
  })
  const finalresponse = await response.json()
  console.log(finalresponse)
};

  return (
    <div className="">
      <div className="p-4 bg-white overflow-auto h-[40vh] rounded-lg">
        <div className='space-y-4 w-auto flex flex-col'>
        {messageList.map((message, index) => (
          <div key={index} className={`${Object.keys(message)[0] == 'user' ?'justify-end': 'justify-start'} p-2 px-4 rounded-full flex `}>
            {Object.keys(message)[0] !== 'user' && <Image width={30} height={30} className='rounded-full overflow-hidden' src='/bot.png'/>}
            <span className='bg-gray-100 rounded-full ml-2 px-4 p-2'>{Object.values(message)[0]}</span>
          </div>
        ))}
        </div>
      </div>
      <div className="flex flex-row chat-input w-full relative">
        <input
            type="text"
            name="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            id="text"
            className="block w-[50vw] rounded-lg border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            placeholder="Type here..."
        />
        <IoMdSend className='absolute right-1 top-3' onClick={handleSendMessage} size={35}/>
      </div>
    </div>
  );
}

export default ChatPage;