import React from "react";
import * as S from "./style";

export default function ModalContainer({ children, onClick }) {
  return (
    <S.ModalBackground onClick={onClick}>
      <S.ModalWrap>{children}</S.ModalWrap>;
    </S.ModalBackground>
  );
}
