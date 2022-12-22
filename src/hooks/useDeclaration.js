import axios from "axios";
import { useParams } from "react-router-dom";

export const useDeclaration = (commentId, handlCloseClick) => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { postkey } = useParams();

  const handleDeclaration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}/report`,
        {
          report: {
            comment: `${commentId}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(res);
      handlCloseClick();
      alert("댓글 신고가 완료되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeclaration };
};
