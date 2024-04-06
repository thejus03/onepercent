import React from 'react'
import { SiChatbot } from "react-icons/si";

const ChatButton = () => {
  return (
    <div className='ml-5 mb-5 bg-gray-200 lg:p-6 p-4 rounded-full ring-2 ring-gray-500'>
        <SiChatbot size={20} />
    </div>
  )
}

export default ChatButton