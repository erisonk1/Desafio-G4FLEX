import style from "./TextArea.module.css";

function TextArea({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  customClass,
}) {
  return (
    <div className={`${style.form_control} ${customClass}`}>
      <label htmlFor={name}>{text}</label>
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
        className={customClass}
      />
    </div>
  );
}
export default TextArea;
