import React from "react";
import styled from "styled-components";

const DisabledBtn = styled.button`
  background-color: ${(props) => props.theme.disabledColor};
  color: #fff;
  cursor: not-allowed;
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 322px;
  height: 44px;
  border-radius: 44px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const AbledBtn = styled(DisabledBtn)`
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  cursor: pointer;
`;

export default function LongBtn({ disabled = true, message, onClick }) {
  return (
    <>
      {disabled ? (
        <DisabledBtn>{message}</DisabledBtn>
      ) : (
        <AbledBtn onClick={onClick}>{message}</AbledBtn>
      )}
    </>
  );
}
