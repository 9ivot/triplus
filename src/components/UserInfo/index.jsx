import React from "react";
import user_img_small from "../../assets/images/user_img_small.svg";
import * as S from "./style";

export default function UserInfo({ children, accountname, username, image }) {
  return (
    <S.UserInfoContanier>
      <S.UserInfoImg
        src={image.includes("Ellipse") ? user_img_small : image}
        alt="프로필 이미지"
      />
      <S.UserInfoNameIdCon>
        <S.UserInfoName>{username}</S.UserInfoName>
        <S.UserInfoId>&#64;{accountname}</S.UserInfoId>
      </S.UserInfoNameIdCon>
      {children}
    </S.UserInfoContanier>
  );
}
