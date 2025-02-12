import { useEffect, useState } from "react";

import style from "./ProjectForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
function ProjectForm({ btnText }) {
  return (
    <form className={style.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do Projeto"
      />
      <Input
        className={style.description}
        type="text"
        text="Descrição do projeto"
        name="description"
        placeholder="Insira a Descrição"
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
