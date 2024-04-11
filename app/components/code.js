// components/code.js
"use client";

import React, { useState } from 'react';
import OpenAI from 'openai';

const Code = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const openai = new OpenAI(process.env.OPENAI_API_KEY);

//   const handleMessageSubmit = async () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { text: input, user: 'user' }]);
//     try {
//       const response = await openai.completions.create({
//         model: 'gpt-3.5-turbo',
//         prompt: input,
//         max_tokens: 150,
//         stop: ['\n', 'User:', 'AI:'],
//         temperature: 0.7,
//       });
//       setMessages([...messages, { text: response.data.choices[0].text.trim(), user: 'bot' }]);
//     } catch (error) {
//       console.error(error);
//     }
//     setInput('');
//   };

  return 
    // <div className="bg-white p-4 rounded-lg shadow-lg">
    //   <div className="flex flex-col h-96 overflow-y-auto">
    //     {messages.map((message, index) => (
    //       <div key={index} className={`flex ${message.user === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
    //         <div className={`p-2 rounded-lg ${message.user === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
    //           {message.text}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="flex mt-4">
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //       className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none"
    //       placeholder="Type your message..."
    //     />
    //     <button onClick={handleMessageSubmit} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
    //   </div>
    // </div>
  
};

export default Code;
