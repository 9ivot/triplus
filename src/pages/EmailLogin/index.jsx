import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import InputBox from "../../components/InputBox/index";
import LongBtn from "../../components/Button/LongBtn";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/* 스타일 */

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

const LoginTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

const InputForm = styled.form`
  margin: 70px 0 30px;
`;

/* 이메일로 회원가입 */
const EmailJoinLink = styled(Link)`
  display: block;
  color: #767676;
  margin-top: 20px;
  font-size: 12px;
  line-height: 15px;
`;

const EmailJoin = () => {
  return <EmailJoinLink to="/emailsignup">이메일로 회원가입</EmailJoinLink>;
};

function EmailLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [loginConfirm, setLoginConfirm] = useState(false);

  const passed = email && password;
  const navigate = useNavigate();

  const handleLoginId = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log("로그인아이디: ", email);

    const emailRegex =
      /^([A-Z|a-z|0-9](\-|\_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

    if (emailRegex.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }

    if (email === "") {
      setEmailMessage("* 이메일을 입력해주세요.");
    } else {
      setEmailMessage("");
      setLoginMessage("");
    }
  };

  const handleLoginPw = (e) => {
    const password = e.target.value;
    setPassword(password);

    if (password == "") {
      setPwMessage("* 비밀번호를 입력해주세요.");
    } else {
      setPwMessage("");
      setLoginMessage("");
    }
  };

  const onClickLogin = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/login`,
        {
          user: {
            email: email,
            password: password,
          },
        }
      );

      console.log("res: ", res);

      if (res.data.user?.token) {
        // localStorage.setItem("token", JSON.stringify(res.data.user.token));
        localStorage.setItem("userinfo", JSON.stringify(res.data.user));
        props.setUserInfo(true);
        setLoginConfirm(true);
        setLoginMessage(""); // 경고문구 삭제
        navigate("/"); // 로그인 성공 후 홈 화면으로 이동
      } else {
        if (email !== "" && password !== "") {
          setLoginConfirm(false);
          setLoginMessage(`*${res.data.message}`);
        } else {
          setLoginMessage("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (email && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  return (
    <>
      <FormContainer>
        <PageTitle className="ir">triplus 로그인 화면</PageTitle>
        <LoginTitle>로그인</LoginTitle>
        <InputForm>
          <InputBox id="email" labelText="이메일" onChange={handleLoginId} />
          <div>{emailMessage}</div>
          <InputBox
            type="password"
            id="password"
            labelText="비밀번호"
            onChange={handleLoginPw}
          />
          <div>{pwMessage}</div>
          <div>{setLoginMessage}</div>
        </InputForm>
        <LongBtn
          message="로그인"
          onClick={onClickLogin}
          disabled={passed ? false : true}
        ></LongBtn>
        <EmailJoin />
      </FormContainer>
    </>
  );
}

export default EmailLogin;
