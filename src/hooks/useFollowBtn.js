import axios from "axios";
import { useState } from "react";

export const useFollowBtn = (isfollow) => {
  const [isFollowing, setIsFollowing] = useState(isfollow);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const handleFollow = async (isfollow, accountname, setProfile) => {
    try {
      if (isfollow === true) {
        const res = await axios.delete(
          `${process.env.REACT_APP_API_KEY}/profile/${accountname}/unfollow`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
        setIsFollowing((prev) => !prev);
        setProfile && setProfile(res.data);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/profile/${accountname}/follow`,
          {},
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
        setIsFollowing((prev) => !prev);
        setProfile && setProfile(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { isFollowing, handleFollow };
};
