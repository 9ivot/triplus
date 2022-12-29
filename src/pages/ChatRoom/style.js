import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import file_gray from "../../assets/images/file_gray.svg";

// ChatVerticalBtn
export const VerticalBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -102px -54px;
`;

// ChatSend
export const ChatSendWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  margin: 9px;
`;

export const SendMessage = styled.p`
  font-size: 14px;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  border-top-right-radius: 0;
  padding: 12px;
  max-width: 240px;
  text-align: left;
  line-height: 18px;
  color: #fff;
`;

export const SendUserImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SendTime = styled.time`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
  align-self: flex-end;
`;

export const SendImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
`;

// ChatRecieve
export const ChatReceiveWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 9px;
`;

export const ReceiveMessage = styled.p`
  font-size: 14px;
  text-align: center;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0;
  padding: 12px;
  max-width: 240px;
  text-align: left;
  line-height: 18px;
`;

export const ReceiveUserImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReceiveTime = styled.time`
  font-size: 10px;
  color: #767676;
  align-self: flex-end;
`;

// ChatHeader
export const ChatUserName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

// ChatBar
export const ChatContainer = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 36px;
  padding: 13px 0;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
`;

export const ChatUploadFileBtn = styled.button`
  background: center / contain url(${file_gray}) no-repeat;
  background-size: 36px;
  width: 36px;
  height: 36px;
  padding: 0 18px;
  margin: 0 18px 0 16px;
`;

export const ChatTextInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  width: 100%;
  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const ChatSendBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) =>
    props.isActive || props.isImgActive ? props.theme.mainColor : "#c4c4c4"};
  width: 5em;
  text-align: center;
  line-height: 36px;
`;
