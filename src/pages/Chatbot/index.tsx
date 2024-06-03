import AnimatedText from '@/components/AnimatedText/AnimatedText'
import ChatbotComponent from '@/components/ChatBot/ChatbotComponent'
import Topbar from '@/components/Topbar/Topbar'
import React from 'react'

function ChatBot() {
  return (<div className='h-screen' >
    <Topbar/>
    <section className=" chatBotPageDiv ">

        <div className="flex justify-around pt-8">
            <div className="  flex justify-center flex-col items-center  text-black w-1/4 ">
                    <img src="/bot3.png" alt="bot" />
                    <br />
                    <AnimatedText />
            </div>
                <ChatbotComponent/>           
        </div>
    </section>
</div>
  )
}

export default ChatBot