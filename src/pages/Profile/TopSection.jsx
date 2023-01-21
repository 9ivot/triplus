import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import user_img_big from "../../assets/images/user_img_big.svg";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";
import LoadingPage from "../LoadingPage";

export default function ProfileTopSection() {
  const {
    data: profileInfo,
    setData: setProfileInfo,
    isLoading,
    getData: getProfileInfo,
  } = useGetData();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { accountname } = useParams();
  const isMyProfile = accountname === userInfo.accountname;
  const url = `${process.env.REACT_APP_API_KEY}/profile/${accountname}`;
  useEffect(() => {
    getProfileInfo(url, "profile");
  }, [accountname]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <S.ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <S.ProfileTopContainer>
        <S.ProfileImgFollowBtnsCon>
          <S.ProfileFollowers
            to={`/profile/${profileInfo.accountname}/follower`}
          >
            <S.ProfileFollowCount>
              {profileInfo.followerCount}
            </S.ProfileFollowCount>
            <S.ProfileFollowTxt>followers</S.ProfileFollowTxt>
          </S.ProfileFollowers>
          <S.ProfileUserImg
            src={
              profileInfo.image.includes("Ellipse")
                ? user_img_big
                : profileInfo.image
            }
            alt="프로필 이미지"
          />
          <S.ProfileFollowers
            to={`/profile/${profileInfo.accountname}/following`}
          >
            <S.ProfileFollowCount isfollowing="1">
              {profileInfo.followingCount}
            </S.ProfileFollowCount>
            <S.ProfileFollowTxt>following</S.ProfileFollowTxt>
          </S.ProfileFollowers>
        </S.ProfileImgFollowBtnsCon>
        <S.ProfileUserName>{profileInfo.username}</S.ProfileUserName>
        <S.PofileUserId>&#64;{profileInfo.accountname} </S.PofileUserId>
        <S.ProfileIntroduce>{profileInfo.intro}</S.ProfileIntroduce>
        {isMyProfile ? (
          <TopSectionMy {...profileInfo} />
        ) : (
          <TopSectionYour
            isfollow={profileInfo.isfollow}
            userAccountName={profileInfo.accountname}
            setProfile={setProfileInfo}
          />
        )}
      </S.ProfileTopContainer>
    </S.ProfileTopSec>
  );
}
