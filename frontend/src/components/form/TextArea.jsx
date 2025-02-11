import style from "./TextArea.module.css";

function TextArea({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}:</label>
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
export default TextArea;
