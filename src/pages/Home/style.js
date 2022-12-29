import { Link } from "react-router-dom";
import styled from "styled-components";
export const HomeNoFollowing = styled.div`
  width: 358px;
  margin: 0 auto;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  gap: 25px;
`;
export const HomeNoFollowingP = styled.p`
  color: ${(props) => props.theme.grayColor};
`;
export const HomeNoFollowingLink = styled(Link)`
  width: 120px;
  height: 44px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReLoading = styled.div`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const MainLogo = styled.img`
  width: 30px;
  margin-right: 5px;
`;
