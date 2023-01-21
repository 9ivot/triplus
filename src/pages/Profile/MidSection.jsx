import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";

export default function ProfileMidSection() {
  const {
    data: productData,
    isLoading,
    getData: getProductData,
    setData: setProductData,
  } = useGetData();
  const { accountname } = useParams();
  const url = `${process.env.REACT_APP_API_KEY}/product/${accountname}`;
  useEffect(() => {
    getProductData(url, "product");
  }, [accountname]);
  return isLoading ? null : productData.length > 0 ? (
    <S.ProfileMidSec>
      <S.ProfileMidSectionCon>
        <S.ProfileMidSectionH2>판매중인 상품</S.ProfileMidSectionH2>
        <S.ProfileMidSectionUl>
          {productData.map((product) => {
            return (
              <ProductCard
                setData={setProductData}
                accountname={accountname}
                productId={product.id}
                productLink={product.link}
                productItemImage={product.itemImage}
                productItemName={product.itemName}
                productPrice={product.price}
              />
            );
          })}
        </S.ProfileMidSectionUl>
      </S.ProfileMidSectionCon>
    </S.ProfileMidSec>
  ) : null;
}
