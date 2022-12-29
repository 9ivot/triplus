import styled from "styled-components";
import imgFile from "../../assets/images/file_gray.svg";

export const SaveBtn = styled.button`
	background-color: ${(props) =>
		props.isActive ? props.theme.mainColor : "#90bcff"};
	color: #fff;
	margin-left: auto;
	border-radius: 32px;
	font-size: 14px;
	width: 90px;
	height: 32px;
`;
export const ProductUploadForm = styled.form``;
export const MainUploadSection = styled.section`
	margin: 48px auto 0;
	padding: 34px 34px 0 34px;
	width: 322px;
`;
export const ImageSave = styled.p`
	font-size: 12px;
	line-height: 14px;
	margin-bottom: 18px;
	color: ${(props) => props.theme.grayColor};
`;
export const ImgPreview = styled.input`
	color: transparent;
	position: relative;
	width: 100%;
	height: 204px;
	background: #f2f2f2;
	border: 0.5px solid ${(props) => props.theme.borderColor};
	border-radius: 10px;
	margin-bottom: 30px;
	cursor: pointer;

	${(props) =>
		props.imageSrc
			? `
					background-image: url(${props.imageSrc});
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;`
			: `
					background-color: #f2f2f2;`}

	&::after {
		content: "";
		background-image: url(${imgFile});
		position: absolute;
		width: 36px;
		height: 36px;
		right: 12px;
		bottom: 12px;
	}
	&::-webkit-file-upload-button {
		display: none;
	}
`;
export const ProductName = styled.strong`
	display: block;
	width: 100%;
	margin-bottom: 16px;
`;
export const ProductPrice = styled.span`
	display: block;
	width: 100%;
	margin-bottom: 16px;
`;
export const SaleLink = styled.span`
	width: 100%;
`;
export const ProductNameLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
export const ProductPriceLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
export const SaleLinkLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
export const ProdutNameInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;
export const ProdutPriceInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;
export const SalelinkInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;
