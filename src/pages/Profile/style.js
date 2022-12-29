import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

// topSection
export const ProfileTopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 8px solid #f2f2f2;
  padding: 37px 0 26px;
`;
export const ProfileTopContainer = styled.div`
  max-width: 390px;
  padding-top: 30px;
  text-align: center;
  position: relative;
`;

export const ProfileUserImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
`;
export const ProfileUserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: block;
  padding: 16px 0 6px;
`;
export const PofileUserId = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
`;
export const ProfileIntroduce = styled.p`
  padding: 16px 0 24px;
  font-size: 14px;
  line-height: 18px;
`;
export const ProfileFollowers = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileImgFollowBtnsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`;
export const ProfileFollowCount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props.isfollowing ? props.theme.grayColor : "black")};
`;
export const ProfileFollowTxt = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;
// TopSectionMy
export const MyProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const MyProfileBtn = styled.button`
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  border-radius: 30px;
  padding: 8px 26px;
  font-size: 14px;
`;

// TopSectionYour
export const YourProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const YourProfileBtn = styled(Link)`
  width: 34px;
  height: 34px;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  span {
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.isfollowicon
        ? `url(${css_sprite}) -130px -190px`
        : `url(${css_sprite}) -90px -190px`};
  }
`;

// MidSection
export const ProfileMidSec = styled.section`
  border-bottom: 8px solid #f2f2f2;
  display: flex;
  justify-content: center;
`;
export const ProfileMidSectionCon = styled.div`
  width: 390px;
  padding: 20px 0 20px 16px;
`;
export const ProfileMidSectionH2 = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;
export const ProfileMidSectionUl = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 16px;
`;

export const ProfileMidSectionImg = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;
export const ProfileMidSectionTxt = styled.strong`
  font-size: 14px;
  line-height: 18px;
  display: block;
  padding: 6px 0 4px;
  font-weight: 700;
`;
export const ProfileMidSectionPrice = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.mainColor};
`;

// BottomSection

export const ProfileBottomSectionBtns = styled.div`
  width: 390px;
  padding: 12px 0;
  margin: 0 auto;
  text-align: end;
`;
export const PostAlbumtIcon = styled.button`
  width: 26px;
  height: 26px;
  background: url(${css_sprite})
    ${(props) => (props.isAlbum ? "-56px -10px" : "-10px -10px")};
`;
export const PostListIcon = styled.button`
  width: 26px;
  height: 26px;
  background: url(${css_sprite})
    ${(props) => (props.isAlbum ? "-10px -56px" : "-56px -56px")};
`;
export const Line = styled.div`
  margin-bottom: 16px;
  border-bottom: 2px solid #f2f2f2;
`;
export const CardContainer = styled.ul`
  padding: 0 21px;
  ${(props) =>
    props.isAlbum
      ? `
      width: 390px;
      display:flex;
      flex-wrap:wrap;
      margin:0 auto;
      gap:5px;
  `
      : `
`}
`;
export const AlbumLi = styled.li`
  width: calc(33.33333% - 5.33333px);
`;
export const AlbumImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 114px;
`;

export const ReLoading = styled.div`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
