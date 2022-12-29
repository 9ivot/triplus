import React from "react";
import * as S from "./style";

export default function LoadingPage() {
  return (
    <S.LoadingPageContainer>
      <S.LoadingImg />
      <S.LoadingMessage>Loading..</S.LoadingMessage>
    </S.LoadingPageContainer>
  );
}
