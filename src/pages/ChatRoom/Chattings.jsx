import React from "react";
import styled from "styled-components";
import ChatReceive from "./ChatReceive";
import ChatSend from "./ChatSend";

const ChatMain = styled.main`
  height: calc(100% - 109px);
  position: fixed;
  width: 100%;
  margin-top: 48px;
  background-color: #f2f2f2;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 0 16px;
`;

export default function Chattings() {
  return (
    <ChatMain>
      <ChatContainer>
        <ChatReceive />
        <ChatSend />
      </ChatContainer>
    </ChatMain>
  );
}
