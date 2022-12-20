import PostCard from "../../components/PostCard";
import * as S from "./style";

export default function UserPostDetail({ myPostData }) {
  if (myPostData) {
    return (
      <section>
        <h2 className="ir">사용자가 작성한 게시글</h2>
        <S.CardContainer>
          <PostCard {...myPostData} />
          <S.Line />
        </S.CardContainer>
      </section>
    );
  }
}
