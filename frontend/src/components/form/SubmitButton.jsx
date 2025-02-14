import style from "./SubmitButton.module.css";

function SubmitButton({ text, onSubmit }) {
  return (
    <div>
      <button className={style.btn} onSubmit={onSubmit} onClick={onSubmit}>
        {text}
      </button>
    </div>
  );
}
export default SubmitButton;
