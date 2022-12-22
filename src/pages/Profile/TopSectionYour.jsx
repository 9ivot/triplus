import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import IsFollowButton from "../Follow/IsFollowButton";

const YourProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const YourProfileFollowBtn = styled.button`
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  /* border-radius: 26px; */
  width: 120px;
  background-color: ${(props) =>
    props.isFollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isFollow ? props.theme.grayColor : "white")};
`;

const YourProfileBtn = styled(Link)`
  width: 34px;
  height: 34px;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  span {
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.isfollowicon
        ? `url(${css_sprite}) -130px -190px`
        : `url(${css_sprite}) -90px -190px`};
  }
`;

export default function TopSectionYour({
  isfollow,
  userAccountName,
  setTriggerFollow,
}) {
  return (
    <YourProfileBtnCon>
      <YourProfileBtn>
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
      <IsFollowButton
        isfollow={isfollow}
        userAccountName={userAccountName}
        isProfile="1"
        setTriggerFollow={setTriggerFollow}
      />
      <YourProfileBtn isfollowicon="1">
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
    </YourProfileBtnCon>
  );
}
