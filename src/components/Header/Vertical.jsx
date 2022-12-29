import React from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import AlertModal from "../Modal/AlertModal";
import ModalContainer from "../Modal/ModalContainer";
import ModalList from "../Modal/ModalList";
import * as S from "./style";

export default function Vertical({ setUserInfo }) {
  const { isModal, isModalAlert, handleModal, handleAlert, handlCloseClick } =
    useModal();
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("userinfo");
    setUserInfo(null);
    navigate("/");
  };
  return (
    <>
      <S.VerticalBtn onClick={handleModal}>
        <span className="ir">버티컬 버튼</span>
      </S.VerticalBtn>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          <ModalList onClick={() => console.log("hi")}>
            설정 및 개인정보
          </ModalList>
          <ModalList onClick={handleAlert}>로그아웃</ModalList>
        </ModalContainer>
      )}
      {isModalAlert !== false ? (
        <AlertModal
          title="로그아웃 하시겠어요?"
          submitText="로그아웃"
          onCloseClick={handlCloseClick}
          onSubmitClick={logOut}
        />
      ) : null}
    </>
  );
}
