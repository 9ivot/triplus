import React from "react";
import * as S from "./style";

export default function SearchInput({ searchInputVal, setSearchInputVal }) {
  return (
    <>
      <label className="ir" htmlFor="searchId">
        계정검색
      </label>
      <S.SearchInp
        value={searchInputVal}
        onChange={(e) => {
          setSearchInputVal(e.target.value);
        }}
        id="searchId"
        placeholder="계정검색"
      />
    </>
  );
}
