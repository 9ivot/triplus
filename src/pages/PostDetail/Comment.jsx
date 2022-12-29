import * as S from "./style";
import { Link, useParams } from "react-router-dom";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalList from "../../components/Modal/ModalList";
import AlertModal from "../../components/Modal/AlertModal";
import { useModal } from "../../hooks/useModal";
import { handleCommentTime } from "../../utils/handleCommentTime";
import { handleDelete } from "../../utils/handleDelete";
import { handleDeclaration } from "../../utils/handleDeclaration";

export default function Comment({ data, commentId, setTrigger }) {
  const { postkey } = useParams();
  const nowDate = handleCommentTime(new Date(data.createdAt));
  const {
    isModal,
    isMyContent,
    isModalAlert,
    handleModal,
    handleAlert,
    handlCloseClick,
  } = useModal(data.author.accountname);

  const deleteUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}`;
  const declarationUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}/report`;

  return (
    <>
      <S.CommentList>
        <Link to={`/profile/${data.author.accountname}`}>
          <S.CommentImg src={data.author.image} />
        </Link>
        <div>
          <S.CommentUserName>
            {data.author.username}
            <S.CommentTime>· {nowDate}</S.CommentTime>
          </S.CommentUserName>
          <S.CommentTxt>{data.content}</S.CommentTxt>
          <S.CommentVertical onClick={handleModal}>
            <span className="ir">더보기 버튼</span>
          </S.CommentVertical>
        </div>
      </S.CommentList>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          {isMyContent ? (
            <>
              <ModalList onClick={(e) => handleAlert(e, "삭제모달")}>
                삭제
              </ModalList>
            </>
          ) : (
            <ModalList onClick={(e) => handleAlert(e, "신고모달")}>
              신고
            </ModalList>
          )}
        </ModalContainer>
      )}
      {isModalAlert !== false ? (
        isModalAlert === "삭제모달" ? (
          <AlertModal
            title="댓글을 삭제할까요?"
            submitText="댓글 삭제"
            onCloseClick={handlCloseClick}
            onSubmitClick={(e) => {
              handleDelete(e, handlCloseClick, setTrigger, deleteUrl);
            }}
          />
        ) : (
          <AlertModal
            title="댓글을 신고하시겠어요?"
            submitText="댓글 신고"
            onCloseClick={handlCloseClick}
            onSubmitClick={(e) => {
              handleDeclaration(e, handlCloseClick, declarationUrl, commentId);
            }}
          />
        )
      ) : null}
    </>
  );
}
