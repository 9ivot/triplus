import React, { useEffect, useLayoutEffect } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import { useReloadData } from "../../hooks/useReloadData";
import * as S from "./style";
import LoadingPage from "../LoadingPage";

export default function Home() {
  const {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  } = useReloadData();
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${skip}`;
  useLayoutEffect(() => {
    getData(url, "홈");
  }, []);
  useEffect(() => {
    if (bottomBoolean) {
      getData(url, "홈");
    }
    window.addEventListener("scroll", bottomScroll);
    return () => {
      window.removeEventListener("scroll", bottomScroll);
    };
  }, [bottomBoolean]);
  return (
    <>
      <Header>
        <HeaderTitle>트리플러스 피드</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>
        {isLoading ? (
          <LoadingPage />
        ) : data.posts.length > 0 ? (
          <ul>
            {data.posts.map((post) => {
              return <PostCard key={post.id} {...post} />;
            })}
          </ul>
        ) : (
          <HomeNoFollow />
        )}
        {reloadLoding && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </MainContainer>
      <Navbar />
    </>
  );
}
