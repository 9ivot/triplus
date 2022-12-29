import React from "react";
import JoinLink from "./JoinLink";
import SocialLoginItem from "./SocialLoginItem";
import styled from "styled-components";

/* loginModal */
const LoginContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px 20px 0px 0px;
  /* top: ${(props) => (props.splashLoading === false ? "140%" : "64%")}; */
`;

const SocialLoginContainer = styled.ul`
  width: 322px;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 0 34px;
  background-color: #ffffff;
`;

export default function LoginModal({ splashLoading }) {
  return (
    <>
      <LoginContainer splashLoading={splashLoading}>
        {/* index.jsx에서 globalStyle로 ir 클래스에 대해 스타일을 지정했기 때문에 클래스명으로 ir을 지정하면 시각적으로 사라짐 */}
        <h2 className="ir">로그인 및 회원가입</h2>
        <SocialLoginContainer>
          <SocialLoginItem
            to="/multilogin"
            socialName="카카오톡"
            x={-142}
            y={-146}
          />
          <SocialLoginItem
            to="/multilogin"
            socialName="구글"
            x={-102}
            y={-10}
          />
          <SocialLoginItem
            to="/multilogin"
            socialName="페이스북"
            x={-190}
            y={-10}
          />
        </SocialLoginContainer>
        <JoinLink />
      </LoginContainer>
    </>
  );
}
