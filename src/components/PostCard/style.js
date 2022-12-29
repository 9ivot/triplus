import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

export const PostCardList = styled.li`
  list-style: none;
  max-width: 358px;
  width: 100%;
  display: flex;
  gap: 12px;
  margin: 0 auto 24px;
  position: relative;
  &:first-child {
    padding-top: 20px;
  }
`;

export const PostCardUserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
export const PostCardUserName = styled.strong`
  margin-top: 4px;
  font-size: 16px;
  display: block;
  font-weight: 500;
`;
export const PostCardUserId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;
export const PostCardContentTxt = styled.pre`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.4;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
`;
export const PostCardContentImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 14px;
`;

export const PostCardTime = styled.time`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;

export const PostCardVertical = styled.button`
  position: absolute;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${css_sprite}) -170px -190px;
`;

// PostCardBtns
export const PostCardHeartChatCon = styled.div`
  display: flex;
  margin-bottom: 18px;
  align-items: center;
`;

export const PostCardLikeBtn = styled.button`
  margin-right: 10px;
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.grayColor};
    font-size: 12px;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  &::before {
    content: "";
    display: block;
    margin-right: 5px;
    ${(props) =>
      props.hearted
        ? `
    background: url(${css_sprite}) -234px -10px;
    width:19px;
    height:17px;
    `
        : `
        background: url(${css_sprite}) -50px -190px;
  width:20px;
  height:20px;
  `}
  }
`;
export const PostCardChatLink = styled(Link)`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url(${css_sprite}) -90px -190px;
  }
  span {
    color: ${(props) => props.theme.grayColor};
    font-size: 12px;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
`;
