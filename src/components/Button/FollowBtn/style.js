import styled from "styled-components";

export const IsFollowBtn = styled.button`
  ${(props) =>
    props.isProfile
      ? `
      width:120px;
  `
      : `
    margin-left: auto; 
    margin-top:12px;
    width: 56px;
    height: 28px; 
    font-size: 12px; 
  `}
  border-radius: 26px;
  background-color: ${(props) =>
    props.isfollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isfollow ? props.theme.grayColor : "white")};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
`;
