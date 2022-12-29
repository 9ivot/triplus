import React from "react";
import * as S from "./style";

export default function SearchButton() {
  return (
    <S.SearchBtn to="/search">
      <span className="ir">검색 버튼</span>
    </S.SearchBtn>
  );
}
