import styled from "styled-components";

export const IconsUl = styled.ul`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 14px;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
`;

export const Iconli = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 60px;
  gap: 4px;
`;

export const NavIcon = styled.button`
  width: 24px;
  height: 24px;
  &.active {
    background: ${(props) => props.tabActiveImg};
  }
  background: ${(props) => props.tabImg};
  border: 0px;
  margin: 0 auto;
`;

export const NavSpan = styled.span`
  display: block;
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
  &.active {
    color: ${(props) => props.theme.mainColor};
  }
`;
