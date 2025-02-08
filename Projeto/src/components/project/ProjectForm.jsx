import { useEffect, useState } from "react";

import style from "./ProjectForm.module.css";
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({ btnText, handleSubmit, taskData }) {
  const [project, setProjects] = useState(taskData || []);
  const submit = (e) => {
    e.preventDefault();
    // console.log(project)
    handleSubmit(project);
  };

  function handleChange(e) {
    setProjects({ ...project, [e.target.name]: [e.target.value] });
    console.log(project);
  }

  return (
    <form className={style.form} onSubmit={submit}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        onSubmit={handleChange}
        placeholder="Insira o nome do Projeto"

      />
      <Input className={style.description}
        type="text"
        text="Descrição do projeto"
        name="description"
        onSubmit={handleChange}
        placeholder="Insira a Descrição"
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
