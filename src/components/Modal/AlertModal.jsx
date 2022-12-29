import React from "react";
import * as S from "./style";

export default function AlertModal({
  title,
  submitText,
  onCloseClick,
  onSubmitClick,
}) {
  return (
    <S.AlertBackground>
      <S.AlertWrap>
        <S.Message>{title}</S.Message>
        <S.ButtonWrap>
          <button onClick={onCloseClick}>취소</button>
          <button onClick={onSubmitClick}>{submitText}</button>
        </S.ButtonWrap>
      </S.AlertWrap>
    </S.AlertBackground>
  );
}
