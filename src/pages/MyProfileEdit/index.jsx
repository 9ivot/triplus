import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputBox from "../../components/InputBox/index";
import LongBtn from "../../components/Button/LongBtn";
import ProfileImg from "../../components/ImageBox";
import { useNavigate, useLocation } from "react-router-dom";
import userImg from "../../assets/images/user_img_big.svg";
import axios from "axios";

const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  margin-top: 30px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const PageTitle = styled.h1``;

const ProfileEditTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 1.2rem;
  color: #000;
`;

const TitleExplain = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`;

const ImgWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

const InputForm = styled.form`
  margin-bottom: 30px;
`;

const MyProfileEdit = () => {
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [itemIntro, setItemIntro] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [accountnameError, setAccountnameError] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const email = location.state.email;
  const password = location.state.password;
  const passed = username && accountname;
  console.log(email, "비번: ", password);

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

  const signInHandler = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
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
    <FormContainer>
      <PageTitle className="ir">프로필 설정화면</PageTitle>
      <ProfileEditTitle>프로필 설정</ProfileEditTitle>
      <TitleExplain>나중에 언제든지 변경할 수 있습니다.</TitleExplain>
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
      <LongBtn
        message="triplus 시작하기"
        onClick={signInHandler}
        disabled={passed ? false : true}
      ></LongBtn>
    </FormContainer>
  );
};

export default MyProfileEdit;
