import LoginModal from "./LoginModal";
import styled, { keyframes } from "styled-components";
import LogoSrc from "../../assets/images/plain_white.svg";
import SplashScreen from "../SplashScreen";
import { useState } from "react";

const logoAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #4d81d3;
`;

const Logo = styled.img`
  margin: auto;
  width: 155px;
  height: 156px;
  animation: ${logoAnimation} 0.8s ease-out forwards;
`;

export default function MultiLogin() {
  const [isLoad, setIsLoad] = useState(true);
  const splashStart = () => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1500);
  };
  splashStart();
  return (
    <>
      {isLoad ? (
        <SplashScreen isLoad={isLoad} setIsLoad={setIsLoad} />
      ) : (
        <MainDiv>
          <Logo src={LogoSrc} alt="triPlus" />
          <LoginModal />
        </MainDiv>
      )}
    </>
  );
}
