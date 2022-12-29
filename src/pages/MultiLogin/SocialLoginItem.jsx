import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import spriteImg from "../../assets/images/css_sprites.png";

const SocialLoginItemList = styled.li`
  /* border를 포함하여 콘텐츠 width를 가지도록 하기 위함 */
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border-radius: 44px;
  margin-bottom: 10px;

  /* 마지막 li요소의 margin-bottom을 0px로 지정 */
  &:last-child {
    margin-bottom: 0px;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    float: left;
    width: 24px;
    height: 24px;
    background-image: url(${spriteImg});
    background-repeat: no-repeat;
    /* 이미지 스프라이트상 이미지 좌표를 입력해서 찾도록 x, y로 구분 */
    background-position: ${(props) => props.x}px ${(props) => props.y}px;
    margin: 10px 0;
    margin-left: 14px;
  }

  ${(props) =>
    props.socialName === "카카오톡" && // 이름이 카카오톡인 경우 & 카카오톡이 존재할 경우
    // 아래의 css를 적용해라
    css`
      border: 1px solid #f2c94c;
      &:hover {
        background-color: #fff1c6;
      }
    `}
  ${(props) =>
    props.socialName === "구글" && // 이름이 구글인 경우 & 구글이 존재하는 경우
    // 아래의 css를 적용해라
    css`
      border: 1px solid #767676;
      &:hover {
        background-color: #cdcdcd;
      }
    `}
  
  ${(props) =>
    props.socialName === "페이스북" && // 이름이 페이스북인 경우 & 페이스북이 존재하는 경우
    // 아래의 css를 적용해라
    css`
      border: 1px solid #2d9cdb;
      &:hover {
        background-color: #c9ebff;
      }
    `}
`;

const SocialLoginAnchor = styled(Link)`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  padding: 13px 0;
  cursor: pointer;
`;

const SocialLoginItem = ({ socialName, x, y }) => {
  return (
    <SocialLoginItemList socialName={socialName} x={x} y={y}>
      <SocialLoginAnchor>{socialName} 계정으로 로그인</SocialLoginAnchor>
    </SocialLoginItemList>
  );
};

export default SocialLoginItem;
