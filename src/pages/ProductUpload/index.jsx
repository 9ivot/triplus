import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePostUpload } from "../../hooks/usePostUpload";
import { useGetPreview } from "../../hooks/useGetPreview";
import * as S from "./style";

export default function ProductUpload({ ...props }) {
  // const [imageSrc, setImageSrc] = useState("");
  const [price, setPrice] = useState("");
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const navigate = useNavigate();

  useEffect(() => {
    //상품 판매 링크 유효성 검사
    const checkLink =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

    if (
      itemName.length > 1 &&
      price.length !== 0 &&
      checkLink.test(link) &&
      previewImgUrl.length !== 0
    ) {
      setIsActive(true);
      setDisabled(false);
    } else {
      setIsActive(false);
      setDisabled(true);
    }
  });

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };
  function handleChange(e) {
    const inputType = e.target.id.slice(6);
    inputType === "price" && setPrice(inputPriceFormat(e.target.value));
    inputType === "product" && setItemName(e.target.value);
    inputType === "salelink" && setLink(e.target.value);
  }

  const { fileName, setFileName } = usePostUpload();
  const { previewImgUrl, getPreview } = useGetPreview();

  // 이미지 스트링 데이터 얻기
  const getImgUrl = async (formData, loadImg) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/image/uploadfiles`,
        formData
      );
      setFileName([
        ...fileName,
        `${process.env.REACT_APP_API_KEY}/${res.data[0].filename}`,
      ]);
      getPreview(loadImg);
    } catch (err) {
      console.error(err);
    }
  };

  // 이미지 파일 업로드
  const handleImgInput = (e) => {
    const loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    fileName.length < 3
      ? getImgUrl(formData, loadImg)
      : alert("이미지는 3장만 업로드 가능합니다.");
  };

  function handleSubmit(e) {
    e.preventDefault();

    async function sendProduct() {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/product`,
          {
            product: {
              itemName: itemName,
              price: parseInt(price.replace(/[^0-9]/g, ""), 10),
              link: link,
              itemImage: fileName.join(","),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-type": "application/json",
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    sendProduct();
    navigate(`/profile/${userInfo.accountname}`);
  }

  return (
    <div>
      <Header>
        <Prev />
        <S.SaveBtn
          isActive={isActive}
          disabled={disabled}
          onClick={handleSubmit}
        >
          저장
        </S.SaveBtn>
      </Header>
      <S.MainUploadSection>
        <S.ProductUploadForm onSubmit={handleSubmit}>
          <h2 className="ir">상품 등록 페이지</h2>
          <S.ImageSave>이미지 등록</S.ImageSave>
          <S.ImgPreview
            type="file"
            onChange={handleImgInput}
            accept="image/*"
            imageSrc={previewImgUrl}
          ></S.ImgPreview>
          <S.ProductName>
            <S.ProductNameLabel>상품명</S.ProductNameLabel>
            <S.ProdutNameInput
              placeholder="2~15자 이내여야 합니다."
              type="text"
              id="input-product"
              maxLength="15"
              minLength="2"
              onChange={handleChange}
              value={itemName}
            ></S.ProdutNameInput>
          </S.ProductName>
          <S.ProductPrice>
            <S.ProductPriceLabel>가격</S.ProductPriceLabel>
            <S.ProdutPriceInput
              id="input-price"
              type="text"
              placeholder="숫자만 입력 가능합니다."
              onChange={handleChange}
              value={price}
              maxLength="12"
            ></S.ProdutPriceInput>
          </S.ProductPrice>
          <S.SaleLink>
            <S.SaleLinkLabel>판매 링크</S.SaleLinkLabel>
            <S.SalelinkInput
              placeholder="URL을 입력해 주세요"
              type="text"
              id="input-salelink"
              onChange={handleChange}
              value={link}
            ></S.SalelinkInput>
          </S.SaleLink>
        </S.ProductUploadForm>
      </S.MainUploadSection>
    </div>
  );
}
