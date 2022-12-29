import styled from "styled-components";
import loading from "../../assets/images/loading.png";

export const LoadingPageContainer = styled.div`
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

export const LoadingMessage = styled.p`
  color: ${(props) => props.theme.mainColor};
  font-size: 48px;
  font-weight: 800;
`;

export const LoadingImg = styled.div`
  background: url(${loading}) no-repeat;
  background-size: 288px;
  width: 288px;
  height: 108px;
`;
