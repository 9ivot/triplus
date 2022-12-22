import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFollowBtn } from "../../hooks/useFollowBtn";
// import { handleFollow } from "../../utils/handleFollow";

const IsFollowBtn = styled.button`
  ${(props) =>
    props.isProfile
      ? `
      width:120px;
  `
      : `
    margin-left: auto; 
    margin-top:12px;
    width: 56px;
    height: 28px; 
    font-size: 12px; 
  `}
  border-radius: 26px;
  background-color: ${(props) =>
    props.isfollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isfollow ? props.theme.grayColor : "white")};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
`;

export default function IsFollowButton({
  isfollow,
  userAccountName,
  isProfile,
  setProfile,
}) {
  const { isFollowing, handleFollow } = useFollowBtn(isfollow, userAccountName);
  return (
    <IsFollowBtn
      onClick={() =>
        handleFollow(isFollowing, userAccountName, setProfile && setProfile)
      }
      isfollow={isFollowing}
      isProfile={isProfile}
    >
      {isFollowing ? "취소" : "팔로우"}
    </IsFollowBtn>
  );
}
