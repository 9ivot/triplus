import React, { useState } from "react";
import styled from "styled-components";
import PostCardBtns from "./PostCardBtns";
import user_img_small from "../../assets/images/user_img_small.svg";
import css_sprites from "../../assets/images/css_sprites.png";
import ModalContainer from "../Modal/ModalContainer";
import ModalList from "../Modal/ModalList";
import AlertModal from "../Modal/AlertModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useModal } from "../../hooks/useModal";

const PostCardList = styled.li`
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

const PostCardUserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const PostCardUserName = styled.strong`
  margin-top: 4px;
  font-size: 16px;
  display: block;
  font-weight: 500;
`;
const PostCardUserId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;
const PostCardContentTxt = styled.pre`
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
const PostCardContentImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PostCardTime = styled.time`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;

const PostCardVertical = styled.button`
  position: absolute;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${css_sprites}) -170px -190px;
`;
export default function PostCard({
  id,
  author,
  content,
  createdAt,
  image,
  commentCount,
  heartCount,
  hearted,
  comments,
}) {
  const date = new Date(createdAt);
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const createAtFormat = new Intl.DateTimeFormat("ko-KR", dateOptions).format(
    date
  );
  const navigate = useNavigate();
  const {
    isModal,
    isMyContent,
    isModalAlert,
    handleModal,
    handleAlert,
    handlCloseClick,
  } = useModal(author.accountname);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const handleDeclaration = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/${id}/report`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        alert("신고 되었습니다.");
      }
      handlCloseClick();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PostCardList>
        <PostCardUserImg src={user_img_small} />
        <div>
          <PostCardUserName>{author.username}</PostCardUserName>
          <PostCardUserId>@{author.accountname}</PostCardUserId>
          <PostCardContentTxt>{content}</PostCardContentTxt>
          {image && <PostCardContentImg src={image} alt="게시물 이미지" />}
          <PostCardBtns
            postkey={id}
            commentCount={commentCount}
            heartCount={heartCount}
            hearted={hearted}
          />
          <PostCardTime>{createAtFormat} </PostCardTime>
        </div>
        <PostCardVertical onClick={handleModal}>
          <span className="ir">더보기 버튼</span>
        </PostCardVertical>
      </PostCardList>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          {isMyContent ? (
            <>
              <ModalList onClick={(e) => handleAlert(e, "삭제모달")}>
                삭제
              </ModalList>
              <ModalList
                onClick={() => {
                  // navigate.push(`/post/edit`, { post });
                }}
              >
                수정
              </ModalList>
            </>
          ) : (
            <ModalList onClick={(e) => handleAlert(e, "신고모달")}>
              신고하기
            </ModalList>
          )}
        </ModalContainer>
      )}
      {isModalAlert !== false ? (
        isModalAlert === "삭제모달" ? (
          <AlertModal
            title="게시글을 삭제할까요?"
            submitText="삭제"
            onCloseClick={handlCloseClick}
            // onSubmitClick={삭제 기능}
          />
        ) : (
          <AlertModal
            title="게시글을 신고하시겠어요?"
            submitText="신고"
            onCloseClick={handlCloseClick}
            onSubmitClick={handleDeclaration}
          />
        )
      ) : null}
    </>
  );
}
