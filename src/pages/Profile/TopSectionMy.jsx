import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function TopSectionMy({ accountname, image, intro, username }) {
  const navigate = useNavigate();
  return (
    <S.MyProfileBtnCon>
      <S.MyProfileBtn
        onClick={() => {
          navigate(`/editprofile`, {
            state: {
              accountname,
              image,
              intro,
              username,
            },
          });
        }}
      >
        프로필 수정
      </S.MyProfileBtn>
      <S.MyProfileBtn onClick={() => navigate("/productupload")}>
        상품 등록
      </S.MyProfileBtn>
    </S.MyProfileBtnCon>
  );
}
