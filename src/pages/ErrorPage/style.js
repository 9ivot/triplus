import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  width: 358px;
  margin: 0 auto;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  font-size: 14px;
`;
export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.grayColor};
`;
export const ErrorPageBtn = styled(Link)`
  width: 120px;
  height: 44px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
