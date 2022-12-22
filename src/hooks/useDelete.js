import axios from "axios";
import { useParams } from "react-router-dom";

export const useDelete = (commentId, handlCloseClick, setCommentList) => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { postkey } = useParams();

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        setCommentList();
        handlCloseClick();
        alert("댓글이 삭제되었습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteComment };
};
