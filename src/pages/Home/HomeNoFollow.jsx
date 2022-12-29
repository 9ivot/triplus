import React from "react";
import * as S from "./style";
import symbolImg from "../../assets/images/plain_blue.svg";

export default function HomeNoFollow() {
  return (
    <S.HomeNoFollowing>
      <img src={symbolImg} alt="심볼이미지" />
      <S.HomeNoFollowingP>유저를 검색해 팔로우 해보세요!</S.HomeNoFollowingP>
      <S.HomeNoFollowingLink to="search">검색하기</S.HomeNoFollowingLink>
    </S.HomeNoFollowing>
  );
}
