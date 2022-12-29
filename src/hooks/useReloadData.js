import axios from "axios";
import { useState } from "react";

export const useReloadData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [bottomBoolean, setBoottomBoolean] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [reloadLoding, setReLoadLoading] = useState(true);
  const [finishReload, setFinishReload] = useState(false);

  const bottomScroll = () => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;
    if (scrollTop >= scrollHeight - clientHeight) {
      setBoottomBoolean(true);
      setSkip((prev) => prev + 10);
    } else {
      setBoottomBoolean(false);
    }
  };
  const getData = async (url, isMy) => {
    if (finishReload) {
      setReLoadLoading(false);
      return;
    }
    if (!isLoading) {
      setReLoadLoading(true);
    }
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      if (skip === 0) {
        setData((prev) => {
          return res.data;
        });
      } else {
        if (isMy === "프로필") {
          setData((prev) => {
            return { post: [...prev.post, ...res.data.post] };
          });
        } else if (isMy === "홈") {
          setData((prev) => {
            return { posts: [...prev.posts, ...res.data.posts] };
          });
        }
      }
      if (isMy === "프로필") {
        if (res.data.post.length === 0) {
          setFinishReload(true);
        }
      } else if (isMy === "홈") {
        if (res.data.posts.length === 0) {
          setFinishReload(true);
        }
      }
      setIsLoading(false);
      setReLoadLoading(false);
      setBoottomBoolean(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  };
};
