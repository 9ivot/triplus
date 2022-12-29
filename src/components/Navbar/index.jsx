import css_sprite from "../../assets/images/css_sprites.png";
import { useNavigate, useMatch } from "react-router-dom";
import * as S from "./style";

export default function Navbar() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const navigate = useNavigate();
  const matchHome = useMatch("/");
  const matchChatList = useMatch("/chatlist");
  const matchProfile = useMatch(`/profile/${userInfo.accountname}`);

  const navbarData = [
    {
      id: 1,
      url: "/",
      name: "홈",
      match: matchHome,
      tabImg: `url(${css_sprite}) -98px -102px`,
      tabActiveImg: `url(${css_sprite}) -146px -10px`,
    },
    {
      id: 2,
      url: "/chatlist",
      name: "채팅",
      match: matchChatList,
      tabImg: `url(${css_sprite}) -146px -54px`,
      tabActiveImg: `url(${css_sprite}) -146px -98px`,
    },
    {
      id: 3,
      url: "/postupload",
      name: "게시물 작성",
      match: null,
      tabImg: `url(${css_sprite}) -10px -102px`,
      tabActiveImg: null,
    },
    {
      id: 4,
      url: `/profile/${userInfo.accountname}`,
      name: "프로필",
      match: matchProfile,
      tabImg: `url(${css_sprite}) -54px -146px`,
      tabActiveImg: `url(${css_sprite}) -98px -146px`,
    },
  ];

  return (
    <S.IconsUl>
      {navbarData.map((navData) => {
        return (
          <S.Iconli key={navData.id}>
            <S.NavIcon
              tabImg={navData.tabImg}
              tabActiveImg={navData.tabActiveImg}
              className={navData.match !== null ? "active" : ""}
              onClick={() => {
                navigate(navData.url);
              }}
            />
            <S.NavSpan className={navData.match !== null ? "active" : ""}>
              {navData.name}
            </S.NavSpan>
          </S.Iconli>
        );
      })}
    </S.IconsUl>
  );
}
