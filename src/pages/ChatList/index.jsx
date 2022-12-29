import React from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import Navbar from "../../components/Navbar";
import ChattingList from "./ChattingList";
import * as S from "./style";

export default function ChatList() {
  return (
    <>
      <Header h1Ir="채팅 리스트 페이지">
        <Prev />
        <Vertical />
      </Header>
      <S.MainChatSection>
        <S.ChatContainer>
          <ChattingList />
        </S.ChatContainer>
      </S.MainChatSection>
      <Navbar />
    </>
  );
}
