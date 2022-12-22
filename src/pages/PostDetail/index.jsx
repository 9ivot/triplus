import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetData } from "../../hooks/useGetData";

export default function PostDetail() {
  const { postkey } = useParams();
  const { data: postData, getData: postGetData } = useGetData();
  const { data: commentData, getData: commentGetData } = useGetData();
  const postUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}`;
  const commentUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`;

  useEffect(() => {
    postGetData(postUrl);
  }, []);

  const setCommentList = async () => {
    const res = await commentGetData(commentUrl);
  };

  useEffect(() => {
    commentGetData(commentUrl);
    console.log(commentData);
  }, []);

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      <MainContainer>
        {postData && <UserPostDetail myPostData={postData.post} />}
        {commentData?.comments &&
          commentData?.comments?.map((mapData) => (
            <Comment
              data={mapData}
              commentId={mapData.id}
              setCommentList={setCommentList}
            />
          ))}
      </MainContainer>
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
