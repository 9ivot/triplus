import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import user_img_big from "../../assets/images/user_img_big.svg";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import axios from "axios";
import { useGetData } from "../../hooks/useGetData";

const ProfileTopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 8px solid #f2f2f2;
  padding: 37px 0 26px;
`;
const ProfileTopContainer = styled.div`
  max-width: 390px;
  padding-top: 30px;
  text-align: center;
  position: relative;
`;

const ProfileUserImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  display: block;
`;
const ProfileUserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: block;
  padding: 16px 0 6px;
`;
const PofileUserId = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
`;
const ProfileIntroduce = styled.p`
  padding: 16px 0 24px;
  font-size: 14px;
  line-height: 18px;
`;
const ProfileFollowers = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ProfileImgFollowBtnsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`;
const ProfileFollowCount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props.isfollowing ? props.theme.grayColor : "black")};
`;
const ProfileFollowTxt = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;

export default function ProfileTopSection() {
  const { data, isLoding, getData } = useGetData();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { accountname } = useParams();
  const [triggerFollow, setTriggerFollow] = useState(false);
  const isMyProfile = accountname === userInfo.accountname;
  const url = `${process.env.REACT_APP_API_KEY}/profile/${accountname}`;

  useEffect(() => {
    getData(url);
  }, [accountname, triggerFollow]);
  return isLoding ? null : (
    <ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <ProfileTopContainer>
        <ProfileImgFollowBtnsCon>
          <ProfileFollowers
            to={`/profile/${data.profile.accountname}/follower`}
          >
            <ProfileFollowCount>
              {data.profile.followerCount}
            </ProfileFollowCount>
            <ProfileFollowTxt>followers</ProfileFollowTxt>
          </ProfileFollowers>
          <ProfileUserImg src={user_img_big} alt="프로필 이미지" />

          <ProfileFollowers
            to={`/profile/${data.profile.accountname}/following`}
          >
            <ProfileFollowCount isfollowing="1">
              {data.profile.followingCount}
            </ProfileFollowCount>
            <ProfileFollowTxt>following</ProfileFollowTxt>
          </ProfileFollowers>
        </ProfileImgFollowBtnsCon>
        <ProfileUserName>{data.profile.username}</ProfileUserName>
        <PofileUserId>@{data.profile.accountname} </PofileUserId>
        <ProfileIntroduce>{data.profile.intro}</ProfileIntroduce>
        {isMyProfile ? (
          <TopSectionMy />
        ) : (
          <TopSectionYour
            setTriggerFollow={setTriggerFollow}
            isfollow={data.profile.isfollow}
            userAccountName={data.profile.accountname}
          />
        )}
      </ProfileTopContainer>
    </ProfileTopSec>
  );
}
