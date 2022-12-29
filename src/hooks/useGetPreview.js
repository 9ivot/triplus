import { useState } from "react";

export const useGetPreview = (loadFile) => {
  const [previewImgUrl, setPreviewImgUrl] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const getPreview = (loadFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(loadFile[0]);
    reader.onload = () => {
      setPreviewImgUrl([...previewImgUrl, reader.result]);
    };
    setIsActive(true);
  };

  return { isActive, setIsActive, previewImgUrl, setPreviewImgUrl, getPreview };
};
