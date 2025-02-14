import style from "./ModalTasks.module.css";
import { IoIosClose } from "react-icons/io";
import Input from "../form/Input";
import { useState } from "react";
import api from "../../api";
import TextArea from "../form/TextArea";
import SubmitButton from "../form/SubmitButton";

function Modal({ back_modal, handleOnClick, name, desc, date, id }) {
  const [changedName, setChangedName] = useState(name);
  const [changedDesc, setChangedDesc] = useState(desc);

  const handleUpdate = async () => {
    try {
      const updates = { name: changedName, description: changedDesc };
      if(!changedName || !changedDesc) {return alert('Preencha todos os campos')}
      const response = await api.patch(`/tasks/${id}`, updates,{
        headers: {
          "Content-Type": "application/json",
        } , 
      }
      
      
    );

      console.log("Tarefa atualizada:", response.data);
      alert('Tarefa Atualizada')
      handleOnClick();
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
  };

  return (
    <div ref={back_modal} className={style.back_modal}>
      <div className={style.container_modal}>
        <div className={style.modal_data}>
          <Input
            text={'Título'}
            customClass={style.modal_name}
            handleOnChange={(e) => setChangedName(e.target.value)}
            value={changedName}
          />
          <TextArea
            text={'Descrição'}
            handleOnChange={(e) => setChangedDesc(e.target.value)}
            value={changedDesc}
            customClass={style.modal_description}
          />
        </div>

        <div className={style.modal_info}>
          <p className={style.modal_date}>Data de Criação: {date}</p>
          <p className={style.modal_id}>ID: {id}</p>
        </div>
        <button className={style.modal_close} onClick={handleOnClick}>
          <IoIosClose className={style.modal_close_icon} />
        </button>
        <SubmitButton onSubmit={handleUpdate} text={"Atualizar"} />
      </div>
    </div>
  );
}

export default Modal;
