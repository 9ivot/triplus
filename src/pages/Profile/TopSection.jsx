import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import user_img_big from "../../assets/images/user_img_big.svg";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";
import LoadingPage from "../LoadingPage";

export default function ProfileTopSection() {
  const { data, setData, isLoading, getData, isError } = useGetData();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { accountname } = useParams();
  const isMyProfile = accountname === userInfo.accountname;
  const url = `${process.env.REACT_APP_API_KEY}/profile/${accountname}`;

  useEffect(() => {
    getData(url, "profile");
  }, [accountname]);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <S.ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <S.ProfileTopContainer>
        <S.ProfileImgFollowBtnsCon>
          <S.ProfileFollowers to={`/profile/${data.accountname}/follower`}>
            <S.ProfileFollowCount>{data.followerCount}</S.ProfileFollowCount>
            <S.ProfileFollowTxt>followers</S.ProfileFollowTxt>
          </S.ProfileFollowers>
          <S.ProfileUserImg
            src={data.image.includes("Ellipse") ? user_img_big : data.image}
            alt="프로필 이미지"
          />
          <S.ProfileFollowers to={`/profile/${data.accountname}/following`}>
            <S.ProfileFollowCount isfollowing="1">
              {data.followingCount}
            </S.ProfileFollowCount>
            <S.ProfileFollowTxt>following</S.ProfileFollowTxt>
          </S.ProfileFollowers>
        </S.ProfileImgFollowBtnsCon>
        <S.ProfileUserName>{data.username}</S.ProfileUserName>
        <S.PofileUserId>&#64;{data.accountname} </S.PofileUserId>
        <S.ProfileIntroduce>{data.intro}</S.ProfileIntroduce>
        {isMyProfile ? (
          <TopSectionMy {...data} />
        ) : (
          <TopSectionYour
            isfollow={data.isfollow}
            userAccountName={data.accountname}
            setProfile={setData}
          />
        )}
      </S.ProfileTopContainer>
    </S.ProfileTopSec>
  );
}
