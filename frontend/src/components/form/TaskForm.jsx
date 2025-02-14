import { useState } from "react";
import style from "./TaskForm.module.css";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import api from "../../api";
import TextArea from "./TextArea";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const btnText = "Criar Tarefa";
  const navigate = useNavigate();

  const createTask = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      await api.post("/tasks", { name, description });
      console.log("Tarefa criada:");
      navigate("/tasks");
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <form className={style.form} onSubmit={createTask}>
      <Input
        className={style.input}
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do Projeto"
        handleOnChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextArea
        className={style.input}
        type="text"
        text="Descrição do projeto"
        name="description"
        placeholder="Insira a Descrição"
        handleOnChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
