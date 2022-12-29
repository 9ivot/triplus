import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";
import { useGetData } from "../../hooks/useGetData";
import IsFollowButton from "../../components/Button/FollowBtn/IsFollowButton";
import * as S from "./style";
import LoadingPage from "../LoadingPage";

export default function Follow() {
  const [triggerFollow, setTriggerFollow] = useState(false);
  const { data, isLoading, getData } = useGetData();
  const { accountname } = useParams();
  const path = useLocation();

  const followingUrl = `${process.env.REACT_APP_API_KEY}/profile/${accountname}/following`;
  const followerUrl = `${process.env.REACT_APP_API_KEY}/profile/${accountname}/follower`;

  useEffect(() => {
    if (path.pathname.includes("follower")) {
      getData(followerUrl);
    } else {
      getData(followingUrl);
    }
  }, [triggerFollow]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Header>
        <Prev />
        <HeaderTitle>follow</HeaderTitle>
      </Header>
      <MainContainer>
        <S.FollowContainer>
          {data.map((follow) => {
            return (
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
            );
          })}
        </S.FollowContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
