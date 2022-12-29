import styled from "styled-components";
import more_vertical from "../../assets/images/more_vertical.png";

// Comment

export const CommentList = styled.li`
  list-style: none;
  max-width: 358px;
  display: flex;
  gap: 12px;
  margin: 0 auto;
  position: relative;
  &:first-child {
    padding: 20px 16px;
  }
  padding: 16px 16px 0;
`;

export const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;
export const CommentUserName = styled.strong`
  margin-top: 4px;
  font-size: 14px;
  display: block;
  font-weight: 500;
`;

export const CommentTxt = styled.pre`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.4;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
  color: #333;
`;

export const CommentTime = styled.time`
  font-size: 10px;
  color: #767676;
  padding-left: 6px;
`;

export const CommentVertical = styled.button`
  position: absolute;
  top: 12px;
  right: 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  background: center / contain url(${more_vertical}) no-repeat;
`;

// UserPostDetail
export const Line = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
