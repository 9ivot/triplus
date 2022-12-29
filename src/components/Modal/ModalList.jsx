import React from "react";
import * as S from "./style";

export default function ModalList({ children, onClick, useRef }) {
  return (
    <S.ModalLi>
      <S.ModalBtn ref={useRef} onClick={onClick}>
        {children}
      </S.ModalBtn>
    </S.ModalLi>
  );
}
