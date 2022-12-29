import React from "react";
import IsFollowButton from "../../components/Button/FollowBtn/IsFollowButton";
import * as S from "./style";

export default function TopSectionYour({
  isfollow,
  userAccountName,
  setProfile,
}) {
  return (
    <S.YourProfileBtnCon>
      <S.YourProfileBtn>
        <span className="ir">채팅하기</span>
        <span />
      </S.YourProfileBtn>
      <IsFollowButton
        isfollow={isfollow}
        userAccountName={userAccountName}
        isProfile="1"
        setProfile={setProfile}
      />
      <S.YourProfileBtn isfollowicon="1">
        <span className="ir">채팅하기</span>
        <span />
      </S.YourProfileBtn>
    </S.YourProfileBtnCon>
  );
}
