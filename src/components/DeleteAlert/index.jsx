import React from "react";
import styled from "styled-components";

const DeleteAlertModal = styled.section`
	display: flex;
	position: fixed;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
`;

const DeleteAlertArticle = styled.div`
	width: 252px;
	background-color: #fff;
	border-radius: 10px;
`;

const AlertMsg = styled.strong`
	display: block;
	padding: 22px;
	text-align: center;
	box-sizing: border-box;
	border-bottom: 0.5px solid rgba(219, 219, 219, 1);
	font-size: 16px;
`;

const CancelBtn = styled.button`
	width: 126px;
	height: 46px;
	background-color: white;
	padding: 0;
	border: transparent;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
`;
const DeleteBtn = styled.button`
	width: 126px;
	height: 46px;
	background-color: white;
	padding: 0;
	border: none;
	border-left: 0.5px solid rgba(219, 219, 219, 1);
	font-size: 14px;
	font-weight: 500;
	color: #4d82d4;
	cursor: pointer;
`;

export default function DeleteAlert() {
	return (
		<DeleteAlertModal>
			<DeleteAlertArticle>
				<AlertMsg>상품을 삭제할까요?</AlertMsg>
				<CancelBtn>취소</CancelBtn>
				<DeleteBtn>삭제</DeleteBtn>
			</DeleteAlertArticle>
		</DeleteAlertModal>
	);
}
