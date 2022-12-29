import { useModal } from "../../hooks/useModal";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalList from "../../components/Modal/ModalList";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function Vertical() {
  const { isModal, handleModal } = useModal();
  const navigate = useNavigate();

  return (
    <>
      <S.VerticalBtn onClick={handleModal}>
        <span className="ir">버티컬 버튼</span>
      </S.VerticalBtn>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          <ModalList onClick={() => navigate("/chatlist")}>
            채팅방 나가기
          </ModalList>
        </ModalContainer>
      )}
    </>
  );
}
