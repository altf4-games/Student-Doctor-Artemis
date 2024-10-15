'use client';

import React from 'react'
import Script from "next/script";

const ChatBot = () => {
  return (
    <div>
      <Script
          id="tars-widget"
          strategy="lazyOnload"
          src="https://tars-file-upload.s3.amazonaws.com/bulb/"
          onLoad={() => {
            window.tarsSettings = { convid: "v5xXSt", href: "https://chatbot.hellotars.com/conv/v5xXSt" };
          }}
        />
    </div>
  )
}

export default ChatBot;
