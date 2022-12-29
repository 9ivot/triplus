import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";

export default function ProfileMidSection() {
  const { data, isLoading, getData } = useGetData();
  const { accountname } = useParams();
  const url = `${process.env.REACT_APP_API_KEY}/product/${accountname}`;
  useEffect(() => {
    getData(url);
  }, [accountname]);
  return isLoading ? null : data > 0 ? (
    <S.ProfileMidSec>
      <S.ProfileMidSectionCon>
        <S.ProfileMidSectionH2>판매중인 상품</S.ProfileMidSectionH2>
        <S.ProfileMidSectionUl>
          {data.map((product) => {
            return (
              <li key={product.id}>
                <S.ProfileMidSectionImg
                  src={product.itemImage}
                  alt="상품 이미지"
                />
                <S.ProfileMidSectionTxt>
                  {product.itemName}{" "}
                </S.ProfileMidSectionTxt>
                <S.ProfileMidSectionPrice>
                  {product.price.toLocaleString("ko-KR")}원
                </S.ProfileMidSectionPrice>
              </li>
            );
          })}
        </S.ProfileMidSectionUl>
      </S.ProfileMidSectionCon>
    </S.ProfileMidSec>
  ) : null;
}
