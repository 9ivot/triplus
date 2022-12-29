import React from "react";
import { useHeartBtn } from "../../hooks/useHeartBtn";
import * as S from "./style";

export default function PostCardBtns({
  commentCount,
  hearted,
  heartCount,
  postkey,
}) {
  const { heartTotal, heartBool, handleHeart } = useHeartBtn(
    hearted,
    heartCount
  );

  return (
    <S.PostCardHeartChatCon>
      <S.PostCardLikeBtn
        onClick={() => handleHeart(postkey)}
        hearted={heartBool}
      >
        <span className="ir">좋아요 버튼</span>
        <span> {heartTotal} </span>
      </S.PostCardLikeBtn>

      <S.PostCardChatLink to={`/postdetail/${postkey}`}>
        <span className="ir">댓글창으로 이동</span>
        <span> {commentCount} </span>
      </S.PostCardChatLink>
    </S.PostCardHeartChatCon>
  );
}
