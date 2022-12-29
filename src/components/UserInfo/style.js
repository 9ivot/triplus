import styled from "styled-components";

export const UserInfoContanier = styled.li`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  align-items: center;
`;
export const UserInfoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  font-size: 10px;
  border-radius: 50%;
`;
export const UserInfoNameIdCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const UserInfoId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
`;
export const UserInfoName = styled.strong`
  font-size: 14px;
`;
