import React from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/user_img_big.svg";
import * as S from "./style";

function User({ user }) {
  const navigate = useNavigate();
  return (
    <>
      <S.ChattingListWrap>
        {user.read === false && <S.ReadCircle />}
        <S.UserProfileImg
          src={userImg}
          alt="유저 프로필 이미지"
          onClick={() => {
            navigate("/chatroom");
          }}
        />
        <S.UserInfo>
          <S.UserName>{user.username}</S.UserName>
          <S.ChatContents>
            <S.UserChat>{user.txt}</S.UserChat>
            <S.ChatDate>{user.date}</S.ChatDate>
          </S.ChatContents>
        </S.UserInfo>
      </S.ChattingListWrap>
    </>
  );
}

export default function ChattingList() {
  const users = [
    {
      username: "애월읍 위니브 감귤농장",
      txt: "오늘 눈이 왔어요",
      date: "2022.12.15",
      read: false,
    },
    {
      username: "제주감귤냠냠",
      txt: "눈사람 만들러 가실분 선착 123명",
      date: "2022.12.19",
      read: true,
    },
    {
      username: "멍멍",
      txt: "멍멍멍",
      date: "2022.12.20",
      read: false,
    },
  ];
  return (
    <>
      {users.map((user) => (
        <User key={user.username} user={user} />
      ))}
    </>
  );
}
