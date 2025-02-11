import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./ProjectForm.module.css";
import Input from './Input';
import SubmitButton from './SubmitButton';
import api from '../../api';

function ProjectForm({ btnText }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!name || !description){
          alert('Preencha todos os campos!')
          return;
    }
    try {
      const response = await api.post('/tasks', { name, description });
      console.log('Tarefa criada:', response.data);
      // Opcional: Limpar os campos do formulário após a submissão
      setName('');
      setDescription('');
      navigate('/tasks',{state: {message: 'Tarefa Salva'}} )
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
      className={style.input}
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do Projeto"
        handleOnChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
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
