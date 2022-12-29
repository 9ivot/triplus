import React from "react";
import ChatBar from "./ChatBar";
import ChatHeader from "./ChatHeader";
import Chattings from "./Chattings";

export default function ChatRoom() {
  return (
    <>
      <ChatHeader />
      <Chattings />
      <ChatBar />
    </>
  );
}
