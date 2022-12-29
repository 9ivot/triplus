import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import LoadingPage from "../LoadingPage";

export default function PostDetail() {
  const { postkey } = useParams();
  const {
    data: postData,
    getData: postGetData,
    isLoading: postIsLoading,
  } = useGetData();
  const {
    data: commentData,
    getData: commentGetData,
    isLoading: commentIsLoading,
  } = useGetData();
  const postUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}`;
  const commentUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`;
  const [trigger, setTrigger] = useState(false);
  const setCommentList = async () => {
    const res = await commentGetData(commentUrl);
  };

  useEffect(() => {
    postGetData(postUrl, "post");
    commentGetData(commentUrl, "comments");
    // console.log(commentData);
  }, [trigger]);

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      {commentIsLoading || postIsLoading ? (
        <LoadingPage />
      ) : (
        <MainContainer>
          {postData && <UserPostDetail myPostData={postData} />}
          {commentIsLoading ? (
            <LoadingPage />
          ) : (
            commentData &&
            commentData.map((mapData) => (
              <Comment
                key={mapData.id}
                data={mapData}
                commentId={mapData.id}
                setTrigger={setTrigger}
              />
            ))
          )}
        </MainContainer>
      )}
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
