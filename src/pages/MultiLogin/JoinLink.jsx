import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// line-height, font-size 반복됨
const SubAreaContainer = styled.div`
  width: 100%;
  margin-bottom: 82px;
  text-align: center;
`;

const SubAreaLink = styled(Link)`
  font-size: 12px;
  line-height: 15px;
  &:last-child::before {
    content: "|";
    display: inline;
    vertical-align: text-top;
    margin: 0 12px;
  }
`;

const JoinLink = () => {
  return (
    <SubAreaContainer>
      <SubAreaLink to="/emaillogin">
        <strong>이메일로 로그인</strong>
      </SubAreaLink>
      <SubAreaLink to="/emailsignup">
        <strong>회원가입</strong>
      </SubAreaLink>
    </SubAreaContainer>
  );
};

export default JoinLink;
