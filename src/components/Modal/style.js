import styled from "styled-components";

// AlertModal
export const AlertBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const AlertWrap = styled.div`
  margin: auto;
  position: absolute;
  width: 252px;
  height: 110px;
  inset: 0;
  z-index: 10;
  background: white;
  border-radius: 10px;
`;

export const Message = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  line-height: 64px;
`;

export const ButtonWrap = styled.div`
  position: relative;
  border-top: 1px solid ${(props) => props.theme.borderColor};

  button {
    width: 50%;
    height: 46px;
  }

  &::after {
    content: "";
    position: absolute;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 50%;
    height: 44px;
  }
`;

// ModalContainer
export const ModalBackground = styled.article`
  position: fixed;
  /* display: ${(props) => (props.showModal ? "block" : "none")}; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: modalBgFadeIn 0.3s ease-in-out;
  @keyframes modalBgFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalWrap = styled.ul`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 36px 0 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  animation: modalFadeIn 0.3s ease-in-out;
  transition: 1s linear;
  &::before {
    content: "";
    width: 50px;
    height: 4px;
    display: block;
    margin: 0 auto 16px;
    background: gray;
    border-radius: 5px;
  }
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(120px);
    }
    to {
      opacity: 1;
    }
  }
`;

// ModalList
export const ModalLi = styled.li`
  padding: 0 26px;
  margin: 0 10px;
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 15px;
  }
`;
export const ModalBtn = styled.button`
  width: 100%;
  text-align: left;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 46px;
  &:hover {
    color: white;
  }
`;
