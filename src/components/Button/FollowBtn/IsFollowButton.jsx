import React from "react";
import { useFollowBtn } from "../../../hooks/useFollowBtn";
import * as S from "./style";

export default function IsFollowButton({
  isfollow,
  userAccountName,
  isProfile,
  setProfile,
}) {
  const { isFollowing, handleFollow } = useFollowBtn(isfollow, userAccountName);
  return (
    <S.IsFollowBtn
      onClick={() =>
        handleFollow(isFollowing, userAccountName, setProfile && setProfile)
      }
      isfollow={isFollowing}
      isProfile={isProfile}
    >
      {isFollowing ? "언팔로우" : "팔로우"}
    </S.IsFollowBtn>
  );
}
