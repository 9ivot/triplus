import * as S from "./style";

export default function PreviewList({ mapData, onClick }) {
  const length = mapData.length;
  return (
    <>
      {mapData !== null && !!mapData.length && (
        <S.PreviewImgList>
          {mapData.map((image, index) => (
            <S.PreviewImgItem key={index}>
              <S.PreviewImg
                src={image}
                alt={`${index + 1}번째 업로드 이미지`}
                length={length}
              />
              <S.DeleteBtn id={index} onClick={onClick} type="button" />
            </S.PreviewImgItem>
          ))}
        </S.PreviewImgList>
      )}
    </>
  );
}
