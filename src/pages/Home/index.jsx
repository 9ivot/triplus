import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import * as S from "./style";
import LoadingPage from "../LoadingPage";
import symbolImg from "../../assets/images/main_home_logo.svg";
import { useObserver } from "../../hooks/useObserver";

export default function Home() {
  const curRef = useRef(null);
  const {
    data: feedData,
    isLoading,
    getData: getFeedData,
    page,
    reloading,
    finishReload,
  } = useObserver(curRef, 10);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${page}`;
  useEffect(() => {
    if (!finishReload) {
      getFeedData(url, "posts");
    }
  }, [page]);

  return (
    <>
      <Header>
        <h1 className="ir">triPlus 피드</h1>
        <img src={symbolImg} alt="triplus logo" />
        <SearchButton />
      </Header>
      <MainContainer>
        {isLoading ? (
          <LoadingPage />
        ) : feedData.length > 0 ? (
          <>
            <ul>
              {feedData.map((post) => {
                return <PostCard key={post.id} {...post} />;
              })}
            </ul>
            <div ref={curRef}></div>
          </>
        ) : (
          <HomeNoFollow />
        )}

        {reloading && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </MainContainer>
      <Navbar />
    </>
  );
}
