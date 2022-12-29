import React from "react";
import error_404 from "../../assets/images/error_404.svg";
import * as S from "./style";

export default function ErrorPage() {
  return (
    <S.ErrorPageContainer>
      <img src={error_404} alt="404 이미지" />
      <S.ErrorMessage>페이지를 찾을 수 없습니다. :( </S.ErrorMessage>
      <S.ErrorPageBtn>이전 페이지</S.ErrorPageBtn>
    </S.ErrorPageContainer>
  );
}
