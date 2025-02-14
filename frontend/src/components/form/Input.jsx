import style from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value, customClass }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
        className={customClass}
        maxLength="40"
      />
    </div>
  );
}
export default Input;
