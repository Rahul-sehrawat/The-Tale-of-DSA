// src/AnimatedText.tsx
import React, { useEffect, useState } from 'react';


const messages: string[] = ["Hello, Welcome To My WebSite","...","I\'am a Chatbot !","...","Ask Question About D.S.A ","...",];

const AnimatedText: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [erasing, setErasing] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (erasing) {
        if (charIndex > 0) {
          setDisplayedText(messages[index].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setErasing(false);
          setIndex((index + 1) % messages.length);
        }
      } else {
        if (charIndex < messages[index].length) {
          setDisplayedText(messages[index].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setErasing(true), 300);
        }
      }
    }, erasing ? 100 : 200);

    return () => clearTimeout(handle);
  }, [charIndex, erasing, index]);

  return (
    <div className="text-center text-4xl font-bold 
    text-transparent bg-clip-text bg-gradient-to-r to-black from-black">
      {displayedText}
    </div>
  );
};

export default AnimatedText;
