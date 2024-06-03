
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  return (
        <div className="w-96">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div> 
  );
};

export default ChatbotComponent;




