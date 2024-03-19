
'use client'


import axios from 'axios';
import React, { useEffect, useState } from 'react';






interface MessageComponentProps {
  name: string; // Will be used for the sender's name
  backgroundColor: string; // A color property, can be used for styling
  darkbackgroundColor: string;
  content : string
}

const MessageComponent: React.FC<MessageComponentProps> = ({ name, backgroundColor , darkbackgroundColor, content }) => {
  // Define a dynamic style for the background color
  return (
    <div className="flex items-start gap-2.5 mt-2">
      <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt={`${name} image`} />
      <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${backgroundColor} rounded-e-xl rounded-es-xl dark:${darkbackgroundColor}`}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
      </div>
    </div>
  );
};











const ChatButton: React.FC = () => {
  return (
    <button
      className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
      type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="text-white block border-gray-200 align-middle">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200">
        </path>
      </svg>
    </button>
  );
};






const ChatComponent: React.FC = () => {








const apiUrl = "http://localhost:8080/v1/"




  
  // useState to hold messages
  const [messages, setMessages] = useState<
  MessageComponentProps[]
  >([
    { name: 'IA', backgroundColor: 'bg-gray-600', darkbackgroundColor: 'bg-gray-700' , content:'IA hello world' },
    // prepopulate with any initial messages if necessary
  ]);

  const [message, setMessage] = useState(''); // Holds the new message input by the user

  // Function to handle the message send
  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form behavior

    // Append new message to the messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      { name: 'User', backgroundColor: 'bg-gray-900', darkbackgroundColor: 'bg-gray-100', content: message },
    ]);


    axios.post(apiUrl, {query: message})
    .then((response) => {
      console.log(response);
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { name: 'IA', backgroundColor: 'bg-gray-600', darkbackgroundColor: 'bg-gray-700', content: response?.data?.response_str as string },
      ]);
    })
    .catch((error) => {
      console.error("Error posting data: ", error);
    });


    setMessage(''); // Clear the input after sending the message
  };

  return (
    <div>
      <ChatButton />
      <div className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
        style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }}>
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight text-black">Chatbot</h2>
        </div>
        
        {/* Scrollable container for messages */}
        <div className="flex flex-col h-[474px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-4">
          {messages.map((msg, index) => (
            <MessageComponent key={index}  name={msg.name} content={msg.content} backgroundColor={msg.backgroundColor} darkbackgroundColor={msg.darkbackgroundColor} />
          ))}
        </div>

        {/* Input form at the bottom */}
        <div className='mt-4'>
          <form className="flex items-center" onSubmit={sendMessage}>
            <input
              className="flex-grow h-10 rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message" value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;


