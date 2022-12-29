import * as S from "./style";

export default function ChatSend() {
  return (
    <>
      <S.ChatSendWrapper>
        <S.SendUserImg src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80" />

        <S.SendMessage>오늘 눈이 왔어요</S.SendMessage>

        <S.SendTime>18:12</S.SendTime>
      </S.ChatSendWrapper>

      <S.ChatSendWrapper>
        <S.SendUserImg src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80" />

        <S.SendImg
          src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />

        <S.SendTime>18:12</S.SendTime>
      </S.ChatSendWrapper>
    </>
  );
}
