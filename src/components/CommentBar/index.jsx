import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import user_img_small from "../../assets/images/user_img_small.svg";
import { useGetData } from "../../hooks/useGetData";

export default function CommentBar({ postkey, setCommentList }) {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { data, getData } = useGetData();
  const url = `${process.env.REACT_APP_API_KEY}/user/myinfo`;
  const [txt, setTxt] = useState("");

  const handlePostComment = (e) => {
    setTxt(e.target.value);
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`,
        {
          comment: {
            content: txt,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data);
      setCommentList();
      setTxt("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <S.CommentForm onSubmit={postComment}>
      {data ? (
        <S.CommentProfileImg
          src={
            data.user.image.includes("Ellipse")
              ? user_img_small
              : data.user.image
          }
          alt={data.user.username}
        />
      ) : (
        <S.CommentProfileImg src={user_img_small} alt="" />
      )}
      <S.CommentInput
        type="text"
        placeholder="댓글 입력하기..."
        onChange={handlePostComment}
        value={txt}
      />
      <S.CommentBtn txt={txt}>게시</S.CommentBtn>
    </S.CommentForm>
  );
}
