import styled from "styled-components";
import user_img_small from "../../assets/images/user_img_small.svg";
import axios from "axios";
import { useState } from "react";

const CommentContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 13px 0;
  border-top: 0.5px solid rgb(219, 219, 219);
`;

const CommentProfileImg = styled.img`
  width: 50px;
  padding: 0 18px;
`;

const CommentInput = styled.input`
  border: 0;
  &:focus {
    outline: none;
  }
  width: 100%;

  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

const CommentBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) => (props.txt ? props.theme.mainColor : "#c4c4c4")};
  width: 5em;
  text-align: center;
`;

export default function CommentBar({ postkey, setCommentList }) {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const [txt, setTxt] = useState("");

  const handlePostComment = (e) => {
    setTxt(e.target.value);
  };

  const postComment = async () => {
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

  return (
    <CommentContainer>
      <CommentProfileImg src={user_img_small} alt="사용자 이름" />
      <CommentInput
        type="text"
        placeholder="댓글 입력하기..."
        onChange={handlePostComment}
        value={txt}
      />
      <CommentBtn onClick={postComment} txt={txt}>
        게시
      </CommentBtn>
    </CommentContainer>
  );
}
