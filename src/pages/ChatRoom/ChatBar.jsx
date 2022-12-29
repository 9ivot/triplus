import { useRef, useState } from "react";
import * as S from "./style";

export default function CommentBar() {
  const [isActive, setIsActive] = useState("");
  const [isImgActive, setIsImgActive] = useState("");
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleImgInput = (e) => {
    setIsImgActive(e.target.files[0]);
  };

  return (
    <S.ChatContainer>
      <S.ChatUploadFileBtn onClick={handleClick} />
      <input
        type="file"
        className="ir"
        id="post-upload-file"
        accept="image/*"
        ref={fileRef}
        onChange={handleImgInput}
      />

      <S.ChatTextInput
        placeholder="메세지 입력하기..."
        onChange={(e) => {
          setIsActive(e.target.value);
        }}
      />
      <S.ChatSendBtn isActive={isActive} isImgActive={isImgActive}>
        전송
      </S.ChatSendBtn>
    </S.ChatContainer>
  );
}
