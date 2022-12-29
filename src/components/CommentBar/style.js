import styled from "styled-components";

export const CommentForm = styled.form`
  padding: 13px 0px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
`;

export const CommentProfileImg = styled.img`
  margin-left: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  flex-grow: 1;
  margin: 0 18px;
  height: 36px;
  border: 0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const CommentBtn = styled.button`
  margin-right: 20px;
  font-size: 14px;
  color: ${(props) => (props.txt ? props.theme.mainColor : "#c4c4c4")};
`;
