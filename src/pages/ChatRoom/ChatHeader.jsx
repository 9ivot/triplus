import Header from "../../components/Header";
import ChatVertical from "./ChatVertical";
import Prev from "../../components/Header/Prev";
import * as S from "./style";

export default function ChatHeader() {
  return (
    <Header>
      <Prev />
      <S.ChatUserName>애월읍 위니브 감귤농장</S.ChatUserName>
      <ChatVertical />
    </Header>
  );
}
