import axios from "axios";
import { useState } from "react";

export const useObserver = (data) => {
  const [observeData, setOberserveData] = useState(data);
  const [isOverveLoading, setIsOverseveLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const observeGetData = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      setOberserveData(res.data);
      setIsOverseveLoading(false);
      setSkip((prev) => prev + 10);
    } catch (error) {
      console.log(error);
    }
  };

  return { observeData, isOverveLoading, observeGetData, skip };
};
