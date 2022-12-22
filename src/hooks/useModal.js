import { useState } from "react";

export const useModal = (accountname) => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [isModal, setIsModal] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const isMyContent = accountname === userInfo.accountname;
  console.log(isMyContent, userInfo.accountname);
  const handleModal = (e) => {
    setIsModal((prev) => !prev);
  };

  const handleAlert = (e, txt) => {
    e.stopPropagation();
    setIsModalAlert(txt);
  };

  const handlCloseClick = () => {
    setIsModalAlert(false);
    setIsModal(false);
  };

  return {
    isModal,
    isMyContent,
    isModalAlert,
    handleModal,
    handleAlert,
    handlCloseClick,
  };
};
