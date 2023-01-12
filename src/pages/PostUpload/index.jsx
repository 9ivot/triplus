import React, { useRef, useEffect, useState } from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import axios from "axios";
import * as S from "./style";
import PreviewList from "./PreviewList";
import { useLocation } from "react-router-dom";
import { useGetPreview } from "../../hooks/useGetPreview";
import { usePostUpload } from "../../hooks/usePostUpload";
import { useGetData } from "../../hooks/useGetData";
import user_img_small from "../../assets/images/user_img_small.svg";
import LoadingPage from "../LoadingPage";
import MapModal from "../../components/Map/MapModal";
import { useModal } from "../../hooks/useModal";
import LocationInfo from "../../components/LocationInfo";

const PostUpload = () => {
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const textRef = useRef();
  const fileRef = useRef();
  const { isModal, handleModal, handlCloseClick } = useModal();
  const { isActive, setIsActive, previewImgUrl, setPreviewImgUrl, getPreview } =
    useGetPreview();
  const {
    fileName,
    setFileName,
    txt,
    setTxt,
    handlePostUpload,
    mapSelect,
    setMapSelect,
  } = usePostUpload();
  const {
    data: profileData,
    getData: profileGetData,
    isLoading,
  } = useGetData();
  const url = `${process.env.REACT_APP_API_KEY}/user/myinfo`;

  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleText = (e) => {
    setTxt(e.target.value);
    txt !== "" ? setIsActive(e.target.value) : setIsActive("");
    e.target.value !== "" ? setDisabled(false) : setDisabled(true);
  };

  const handleFile = (e) => {
    e.target.file !== "" ? setDisabled(false) : setDisabled(true);
    fileRef.current.click();
  };

  // 이미지 파일 스트링 데이터 얻기
  const getImgUrl = async (formData, loadImg, e) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/image/uploadfiles`,
        formData
      );
      setFileName([
        ...fileName,
        `${process.env.REACT_APP_API_KEY}/${res.data[0].filename}`,
      ]);
      getPreview(loadImg, e);
    } catch (err) {
      console.error(err);
    }
  };

  // 이미지 파일 업로드
  const handleImgInput = (e) => {
    const loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    fileName.length < 3
      ? getImgUrl(formData, loadImg, e)
      : alert("3개 이하의 파일을 업로드 하세요.");
  };

  // 프리뷰 및 데이터 삭제
  const handleDeletePreview = (e) => {
    setPreviewImgUrl(
      previewImgUrl.filter((_, index) => e.target.id !== String(index))
    );
    setFileName(fileName.filter((_, index) => e.target.id !== String(index)));

    if (textRef.current.value.length === 0 && fileName.length <= 1) {
      setIsActive(false);
    }
    fileRef.current.value = "";
  };

  // 게시글 수정
  useEffect(() => {
    if (location.state) {
      if (location.state.content.includes('"map":{')) {
        setTxt(JSON.parse(location.state.content).content);
        setMapSelect(JSON.parse(location.state.content).map);
      } else {
        setTxt(location.state.content);
      }
      if (location.state.image) {
        setFileName(location.state.image.split(","));
        setPreviewImgUrl(location.state.image.split(","));
        setIsActive(true);
        setDisabled(false);
      }
    }
  }, []);

  // 프로필 이미지 불러오기
  useEffect(() => {
    profileGetData(url, "user");
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div>
      <Header>
        <Prev />
        <S.UploadBtn
          onClick={handlePostUpload}
          isActive={isActive}
          disabled={disabled}
        >
          업로드
        </S.UploadBtn>
      </Header>
      <MainContainer>
        <S.UploadContainer>
          <S.UploadProfileImg
            userProfileImg={
              profileData.image.includes("Ellipse")
                ? user_img_small
                : profileData.image
            }
          />
          <S.UploadContentForm onSubmit={handlePostUpload}>
            <S.UploadText
              name="textarea-uploadpost"
              placeholder="게시글 입력하기..."
              onChange={handleText}
              onInput={handleResizeHeight}
              value={txt}
              ref={textRef}
              maxLength="2000"
            />
            <PreviewList
              mapData={previewImgUrl}
              onClick={handleDeletePreview}
            />
            {mapSelect && <LocationInfo mapSelect={mapSelect} />}
          </S.UploadContentForm>
          <S.PostUploadBottomBtns>
            <S.PostUploadBottomBtn
              type="button"
              left={true}
              onClick={handleFile}
            />
            <input
              type="file"
              className="ir"
              id="post-upload-file"
              accept="image/*"
              ref={fileRef}
              onChange={handleImgInput}
            />
            <S.PostUploadBottomBtn onClick={handleModal} type="button" />
          </S.PostUploadBottomBtns>
        </S.UploadContainer>
      </MainContainer>
      {isModal && (
        <MapModal handleModal={handleModal} setMapSelect={setMapSelect} />
      )}
    </div>
  );
};

export default PostUpload;
