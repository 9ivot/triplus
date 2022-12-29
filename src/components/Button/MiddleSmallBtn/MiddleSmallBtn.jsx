import React from "react";
import styled from "styled-components";

const DisabledBtn = styled.button`
  background-color: ${(props) => props.theme.disabledColor};
  color: #fff;
  margin-left: auto;
  border-radius: 32px;
  font-size: 14px;
  width: 90px;
  height: 32px;
  cursor: not-allowed;
`;

const AbledBtn = styled(DisabledBtn)`
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

export default function MiddleSmallBtn({ disabled = true, message, onClick }) {
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
