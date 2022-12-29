import React from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import ProfileBottomSection from "./BottomSection";
import ProfileMidSection from "./MidSection";
import ProfileTopSection from "./TopSection";

export default function Profile({ setUserInfo }) {
  return (
    <>
      <Header h1Ir="프로필페이지">
        <Prev />
        <Vertical setUserInfo={setUserInfo} />
      </Header>
      <MainContainer ispadding="1">
        <ProfileTopSection />
        <ProfileMidSection />
        <ProfileBottomSection />
      </MainContainer>
      <Navbar />
    </>
  );
}
