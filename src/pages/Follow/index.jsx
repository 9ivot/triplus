import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";
import IsFollowButton from "../../components/Button/FollowBtn/IsFollowButton";
import * as S from "./style";
import LoadingPage from "../LoadingPage";
import { useObserver } from "../../hooks/useObserver";

export default function Follow() {
  const [triggerFollow, setTriggerFollow] = useState(false);
  const curRef = useRef(null);
  const {
    data: folloData,
    isLoading,
    getData: getFollowData,
    page,
    reloading,
    finishReload,
  } = useObserver(curRef, 15);
  const { accountname } = useParams();
  const path = useLocation();
  const followingUrl = `${process.env.REACT_APP_API_KEY}/profile/${accountname}/following/?limit=15&skip=${page}`;
  const followerUrl = `${process.env.REACT_APP_API_KEY}/profile/${accountname}/follower/?limit=15&skip=${page}`;

  useEffect(() => {
    if (!finishReload) {
      if (path.pathname.includes("follower")) {
        getFollowData(followerUrl);
      } else {
        getFollowData(followingUrl);
      }
    }
  }, [triggerFollow, page]);

  return (
    <>
      <Header>
        <Prev />
        <HeaderTitle>follow</HeaderTitle>
      </Header>
      <MainContainer>
        <S.FollowContainer>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              {folloData.map((follow) => (
                <S.ProfileLink key={follow._id}>
                  <Link to={`/profile/${follow.accountname}`}>
                    <UserInfo {...follow} />
                  </Link>
                  <IsFollowButton
                    isfollow={follow.isfollow}
                    userAccountName={follow.accountname}
                    setTriggerFollow={setTriggerFollow}
                  />
                </S.ProfileLink>
              ))}
              <div ref={curRef} />
            </>
          )}
        </S.FollowContainer>
        {reloading && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </MainContainer>
      <Navbar />
    </>
  );
}
