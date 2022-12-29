import * as S from "./style";

export default function Chatting() {
  return (
    <>
      <S.ChatReceiveWrapper>
        <S.ReceiveUserImg src="https://cdn.pixabay.com/photo/2020/12/16/10/44/cat-5836297_1280.jpg" />

        <S.ReceiveMessage>안녕하세요 거기 어떤가요?</S.ReceiveMessage>

        <S.ReceiveTime>17:23</S.ReceiveTime>
      </S.ChatReceiveWrapper>

      <S.ChatReceiveWrapper>
        <S.ReceiveUserImg src="https://cdn.pixabay.com/photo/2020/12/16/10/44/cat-5836297_1280.jpg" />

        <S.ReceiveMessage>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </S.ReceiveMessage>

        <S.ReceiveTime>17:23</S.ReceiveTime>
      </S.ChatReceiveWrapper>
    </>
  );
}
