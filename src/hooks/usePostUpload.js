import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const usePostUpload = () => {
  const [txt, setTxt] = useState("");
  const [fileName, setFileName] = useState([]);
  const { postid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const postUrl = `${process.env.REACT_APP_API_KEY}/post`;
  const editUrl = `${process.env.REACT_APP_API_KEY}/post/${postid}`;

  const handlePostUpload = async (e) => {
    e.preventDefault();
    try {
      if (location.state) {
        const res = await axios.put(
          editUrl,
          {
            post: {
              content: txt,
              image: fileName.join(","),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
      } else {
        const res = await axios.post(
          postUrl,
          {
            post: {
              content: txt,
              image: fileName.join(","),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
      }
      navigate(`/profile/${userInfo.accountname}`);
    } catch (err) {
      console.error(err);
    }
  };

  return { fileName, setFileName, txt, setTxt, handlePostUpload };
};
