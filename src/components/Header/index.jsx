import React from "react";
import * as S from "./style";

export default function Header({ children, h1Ir }) {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        {h1Ir && <h1 className="ir">{h1Ir}</h1>}
        {children}
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
