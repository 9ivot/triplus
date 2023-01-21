import React, { useEffect, useRef, useState } from "react";
import PostCard from "../../components/PostCard";
import { Link, useParams } from "react-router-dom";
import * as S from "./style";
import { useGetData } from "../../hooks/useGetData";
import icon_img_layers from "../../assets/images/icon_img_layers.svg";
import { useObserver } from "../../hooks/useObserver";

export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const [isAlbum, setIsAlbum] = useState(false);
  const {
    data: albumData,
    isLoading: albumLoading,
    getData: albumGetData,
  } = useGetData();

  const curRef = useRef(null);
  const {
    data: postData,
    isLoading,
    getData: getPostData,
    page,
    reloading,
    finishReload,
    setPage,
    setFinishReload,
    setData: setPostData,
  } = useObserver(curRef, 5);
  const listUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=5&skip=${page}`;
  const albumUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=50`;

  const handleAlbum = () => {
    albumGetData(albumUrl, "post");
    setIsAlbum(true);
  };

  useEffect(() => {
    setPage(0);
    setFinishReload(false);
  }, [accountname]);

  useEffect(() => {
    if (!finishReload) {
      getPostData(listUrl, "post");
    }
  }, [page, accountname]);
  return (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <S.ProfileBottomSectionBtns>
        <S.PostListIcon isAlbum={isAlbum} onClick={() => setIsAlbum(false)} />
        <S.PostAlbumtIcon isAlbum={isAlbum} onClick={handleAlbum} />
      </S.ProfileBottomSectionBtns>
      <S.Line />
      <S.CardContainer isAlbum={isAlbum}>
        {isLoading ? null : isAlbum ? (
          albumLoading !== true &&
          albumData
            .filter((post) => post.image)
            .map((post) => {
              return (
                <S.AlbumLi key={post.id}>
                  <Link to={`/postdetail/${post.id}`}>
                    <S.AlbumImage
                      src={post.image.split(",")[0]}
                      alt={post.content}
                    />
                  </Link>
                  {post.image.split(",").length > 1 && (
                    <S.AlbumLayers src={icon_img_layers} />
                  )}
                </S.AlbumLi>
              );
            })
        ) : (
          <>
            {postData.map((post) => {
              return <PostCard key={post.id} setData={setPostData} {...post} />;
            })}
            <div ref={curRef}></div>
          </>
        )}

        {reloading && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </S.CardContainer>
    </section>
  );
}
