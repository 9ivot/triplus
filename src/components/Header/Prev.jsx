import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function Prev() {
  const navigate = useNavigate();
  return (
    <S.PrevBtn
      onClick={() => {
        navigate(-1);
      }}
    >
      <span className="ir">이전 버튼</span>
    </S.PrevBtn>
  );
}
