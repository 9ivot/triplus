import React, { useEffect, useLayoutEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { Link, useParams } from "react-router-dom";
import { useReloadData } from "../../hooks/useReloadData";
import * as S from "./style";
import { useGetData } from "../../hooks/useGetData";

export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  } = useReloadData();
  const [isAlbum, setIsAlbum] = useState(false);
  const {
    data: albumData,
    isLoading: albumLoading,
    getData: albumGetData,
  } = useGetData();
  const [trigger, setTrigger] = useState(false);
  const listUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=10&skip=${skip}`;
  const albumUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=50`;

  useLayoutEffect(() => {
    getData(listUrl, "프로필");
  }, [trigger, accountname]);

  useEffect(() => {
    if (isAlbum) {
      albumGetData(albumUrl);
    } else {
      if (bottomBoolean) {
        getData(listUrl, "프로필");
      }
      window.addEventListener("scroll", bottomScroll);
      return () => {
        window.removeEventListener("scroll", bottomScroll);
      };
    }
  }, [accountname, trigger, bottomBoolean, isAlbum]);
  return (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <S.ProfileBottomSectionBtns>
        <S.PostListIcon isAlbum={isAlbum} onClick={() => setIsAlbum(false)} />
        <S.PostAlbumtIcon isAlbum={isAlbum} onClick={() => setIsAlbum(true)} />
      </S.ProfileBottomSectionBtns>
      <S.Line />
      <S.CardContainer isAlbum={isAlbum}>
        {isLoading
          ? null
          : isAlbum
          ? albumLoading !== true &&
            albumData.post
              .filter((post) => post.image)
              .map((post) => {
                return (
                  <S.AlbumLi key={post.id}>
                    <Link to={`/postdetail/${post.id}`}>
                      <S.AlbumImage src={post.image} alt={post.content} />
                    </Link>
                  </S.AlbumLi>
                );
              })
          : data.post.map((post) => {
              return (
                <PostCard key={post.id} setTrigger={setTrigger} {...post} />
              );
            })}
        {reloadLoding && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </S.CardContainer>
    </section>
  );
}
