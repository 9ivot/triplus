import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import styled from "styled-components";
import ProfileImg from "../../components/ImageBox";
import InputBox from "../../components/InputBox/index";
import axios from "axios";
import userImg from "../../assets/images/user_img_big.svg";
import MiddleSmallBtn from "./../../components/Button/MiddleSmallBtn/MiddleSmallBtn";

const FormContainer = styled.section`
  position: absolute;
  top: 49px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 90vh; */
  width: 100vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const PageTitle = styled.h1``;

const ImgWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

const InputForm = styled.form`
  margin-bottom: 30px;
`;

export default function SetProfile() {
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  // console.log(location.state);

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [itemIntro, setItemIntro] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [accountnameError, setAccountnameError] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const navigate = useNavigate();

  const email = location.state.email;
  const password = location.state.password;
  const passed = username && accountname;

  /* 사용자이름이 바뀔때마다 유효성검사 진행 */
  useEffect(() => {
    const usernameRegex = /^([ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]){2,10}$/;

    if (!usernameRegex.test(username)) {
      setUsernameError("* 사용자 이름을 올바르게 입력하세요");
      setUsernameValid(false);
    } else {
      setUsernameError("");
      setUsernameValid(true);
    }
  }, [username]);

  /* 계정ID가 바뀔때마다 유효성검사 진행 */
  useEffect(() => {
    const accountnameRegex = /^([A-Za-z0-9_.])+$/;
    if (!accountnameRegex.test(accountname) && accountname !== "") {
      setAccountnameError("*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.");
      setAccountnameValid(false);
    } else if (accountname === "") {
      setAccountnameValid(false);
    } else {
      setAccountnameError("");
      setAccountnameValid(true);
    }
  }, [accountname]);

  const saveHandler = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
        headers: {
          "Content-type": "application/json",
        },
        user: {
          username: username,
          accountname: accountname,
          intro: itemIntro,
          email: email,
          password: password,
          image: ProfileImg ? ProfileImg : userImg,
        },
      });
      navigate("/emaillogin");
    } catch (error) {
      if (error.response.data.message === "이미 사용중인 계정 ID입니다.") {
        setAccountnameError("이미 사용중인 계정 ID입니다.");
      }
    }
  };

  return (
    <>
      <Header>
        <Prev />
        <MiddleSmallBtn
          message="다음"
          onclick={saveHandler}
          disabled={passed ? false : true}
        />
      </Header>
      <FormContainer>
        <PageTitle className="ir">프로필 수정 페이지</PageTitle>
        <ImgWrapper>
          <ProfileImg />
        </ImgWrapper>
        <InputForm>
          <InputBox
            id="username"
            labelText="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p className="message">{usernameError}</p>
          <InputBox
            id="accountname"
            labelText="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
          />
          <p className="message">{accountnameError}</p>
          <InputBox
            id="itemIntro"
            labelText="소개"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </InputForm>
      </FormContainer>
    </>
  );
}
