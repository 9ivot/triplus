import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userinfo"));

export const handleDeclaration = async (
  e,
  handlCloseClick,
  url,
  declarationId
) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      url,
      {
        report: {
          comment: `${declarationId}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      }
    );
    handlCloseClick();
  } catch (error) {
    console.log(error);
  }
};
