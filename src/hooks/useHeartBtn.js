import axios from "axios";
import { useState } from "react";

export const useHeartBtn = (hearted, heartCount) => {
  const [heartTotal, setHeartTotal] = useState(heartCount);
  const [heartBool, setHeartBool] = useState(hearted);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const handleHeart = async (postkey) => {
    try {
      if (heartBool === true) {
        const res = await axios.delete(
          `${process.env.REACT_APP_API_KEY}/post/${postkey}/unheart`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
        setHeartBool(res.data.post.hearted);
        setHeartTotal(res.data.post.heartCount);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/post/${postkey}/heart`,
          {},
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
        setHeartBool(res.data.post.hearted);
        setHeartTotal(res.data.post.heartCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { heartTotal, heartBool, handleHeart };
};
