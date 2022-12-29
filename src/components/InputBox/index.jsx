import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 322px;
  color: #767676;
  font-weight: 500;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  line-height: 15px;
`;

const Input = styled.input`
  width: inherit;
  padding-top: 16px;
  margin-bottom: 16px;
  height: 48px;
  border: 0;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;

  &:focus {
    outline: 0;
    border-bottom: 2px solid #4d82d4;
  }

  &::placeholder {
    position: absolute;
    bottom: 14px;
    color: #dbdbdb;
  }
`;

export default function index({ type = "text", useRef, ...props }) {
  return (
    <InputContainer>
      <Label htmlFor={props.id}>{props.labelText}</Label>
      <Input type={type} ref={useRef} {...props} />
    </InputContainer>
  );
}
