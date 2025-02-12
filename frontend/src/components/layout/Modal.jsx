import style from "./Modal.module.css";
import { IoIosClose } from "react-icons/io";

function Modal({ back_modal, handleOnClick, name, desc, date, id }) {
  return (
    <div ref={back_modal} className={style.back_modal}>
      <div className={style.container_modal}>
        <div className={style.modal_data}>
          <h1 className={style.modal_name}>{name}</h1>
          <p className={style.modal_description}>{desc}</p>
        </div>

        <div className={style.modal_info}>
          <p className={style.modal_date}>Data de Criação: {date}</p>
          <p className={style.modal_id}>ID: {id}</p>
        </div>
        <button className={style.modal_close} onClick={handleOnClick}>
          <IoIosClose className={style.modal_close_icon} />
        </button>
      </div>
    </div>
  );
}
export default Modal;
