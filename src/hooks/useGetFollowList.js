import axios from "axios";
import { useState } from "react";

export const useGetFollowList = () => {
  const [followList, setFollowList] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const getFollowList = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      setFollowList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { followList, getFollowList };
};
