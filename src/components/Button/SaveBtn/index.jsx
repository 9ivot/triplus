import { SaveButton } from "./style";

export default function SaveBtn({ isActive, disabled, handleSubmit }) {
  return (
    <SaveButton isActive={isActive} disabled={disabled} onClick={handleSubmit}>
      저장
    </SaveButton>
  );
}
