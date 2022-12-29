import React, { useState } from "react";
import styled from "styled-components";
import { PlaneEvent } from "./splashEvent";
import LogoSrc from "../../assets/images/plain_blue.svg";
import Wave from "react-wavify";

const Logo = styled.img`
  display: block;
  z-index: 1;
  width: 228px;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${PlaneEvent} 1s ease forwards;
`;
const SplashBody = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  /* display: ${(props) => (props.isLoad ? "none" : "flex")}; */
  z-index: 50;
`;
const WaveWrapper = styled.div`
  bottom: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
  background: rgb(255, 255, 255);
  height: 130px;
  margin: 0px;
`;

export default function SplashScreen() {
  return (
    <>
      <SplashBody>
        <Logo src={LogoSrc} />
        <WaveWrapper>
          <Wave
            style={{ zIndex: 10 }}
            options={{ height: 30, speed: 0.6, points: 5 }}
            fill="url(#gradient)"
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="20%" stopColor="#4D81D3" />
                <stop offset="80%" stopColor="#fff" />
              </linearGradient>
            </defs>
          </Wave>
        </WaveWrapper>
      </SplashBody>
    </>
  );
}
