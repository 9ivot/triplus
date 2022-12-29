import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputBox from "../../components/InputBox/index";
import LongBtn from "../../components/Button/LongBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  margin-top: 30px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const PageTitle = styled.h1``;

const SignUpTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

const InputForm = styled.form`
  margin: 70px 0 30px;
`;

export default function EmailSignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const navigate = useNavigate();

  /* 이메일 인풋값이 바뀔때마다 이메일 유효성검사 진행 */
  useEffect(() => {
    const emailRegex =
      /^([A-Z|a-z|0-9](\-|\_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

    if (!emailRegex.test(email) && email !== "") {
      setEmailError("* 올바른 이메일 형식이 아닙니다.");
      setEmailValid(false);
    } else if (email === "") {
      setEmailError("");
      setEmailValid(false);
    } else {
      setEmailError("");
      setEmailValid(true);
    }
  }, [email]);

  /* 비밀번호 인풋값이 바뀔때마다 비밀번호 유효성 검사 진행 */
  useEffect(() => {
    if (password.length < 6 && password !== "") {
      setPasswordError("* 비밀번호는 6자 이상이어야 합니다.");
      setPasswordValid(false);
    } else if (password === "") {
      setPasswordValid(false);
    } else {
      setPasswordError("");
      setPasswordValid(true);
    }
  }, [password]);

  /* 다음버튼을 누를 경우에 서버에 post */
  const sendData = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/emailvalid`,
      {
        user: {
          email: email,
        },
      }
    );

    if (res.data.message === "사용 가능한 이메일 입니다.") {
      setEmailValid(true);
      navigate("/myprofileedit", {
        state: {
          email: email,
          password: password,
        },
      });
    } else if (res.data.message === "이미 가입된 이메일 주소 입니다.") {
      setEmailError("*이미 가입된 이메일 주소입니다.");
      setEmailValid(false);
    } else {
      setEmailValid(false);
      alert("올바른 이메일과 비밀번호를 입력해주세요");
    }
  };

  return (
    <FormContainer>
      <PageTitle className="ir">triplus 회원가입 화면</PageTitle>
      <SignUpTitle>이메일로 회원가입</SignUpTitle>
      <InputForm>
        <InputBox
          id="email"
          labelText="이메일"
          placeholder="이메일 주소를 입력하세요"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="message">{emailError}</p>
        <InputBox
          type="password"
          id="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해주세요"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="message">{passwordError}</p>
      </InputForm>
      <LongBtn
        disabled={emailValid && passwordValid ? false : true}
        onClick={sendData}
        message="다음"
      ></LongBtn>
    </FormContainer>
  );
}
