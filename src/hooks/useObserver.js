import axios from "axios";
import { useEffect, useState } from "react";

export const useObserver = (reloadRef, pageNum) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [page, setPage] = useState(0);
  const [reloading, setReloading] = useState(false);
  const [finishReload, setFinishReload] = useState(false);

  const loadMore = () => setPage((prev) => prev + pageNum);

  const getData = async (url, name) => {
    try {
      setReloading(true);
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      if (name) {
        if (res.data[name].length === 0) {
          setFinishReload(true);
        }
      } else {
        if (res.data.length === 0) {
          setFinishReload(true);
        }
      }
      if (page > 0) {
        name
          ? setData((prev) => [...prev, ...res.data[name]])
          : setData((prev) => [...prev, ...res.data]);
      } else {
        name ? setData(res.data[name]) : setData(res.data);
      }
      setIsLoading(false);
      setReloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let observer;
    if (reloadRef.current && !finishReload) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(reloadRef.current);
    }

    return () => observer && observer.disconnect();
  }, [isLoading]);

  return {
    data,
    isLoading,
    setData,
    getData,
    loadMore,
    page,
    reloading,
    finishReload,
    setPage,
    setFinishReload,
  };
};
