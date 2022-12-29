import styled from "styled-components";
import circle from "../../assets/images/circle.svg";

// index
export const MainChatSection = styled.section`
  width: 358px;
  margin: 48px auto 0;
  padding: 24px 16px 0 16px;
`;

export const ChatContainer = styled.ul`
  display: block;
  margin: 0 auto;
  max-width: 358px;
  height: 42px;
  background-color: #fff;
  position: relative;
`;

// ChattingList
export const ChattingListWrap = styled.li`
  display: flex;
  flex-grow: 0;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

export const UserProfileImg = styled.img`
  width: 42px;
  height: 42px;
  position: relative;
  cursor: pointer;
`;

export const UserInfo = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  color: black;
  font-size: 14px;
  line-height: 17px;
  margin-top: 2px;
`;

export const ChatContents = styled.span`
  display: flex;
  flex-direction: row;
  width: 304px;
  align-items: baseline;
  justify-content: space-between;
`;

export const UserChat = styled.p`
  color: ${(props) => props.theme.grayColor};
  font-size: 12px;
  line-height: 15px;
  margin-top: 4px;
  display: block;
  width: 238px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatDate = styled.p`
  font-size: 10px;
  line-height: 13px;
  width: 53px;
  color: ${(props) => props.theme.borderColor};
`;

export const ReadCircle = styled.div`
  background-image: url(${circle});
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  z-index: 10;
`;
