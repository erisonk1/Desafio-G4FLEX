import { useState, useEffect, useRef } from "react";
import api from "../../api";
import TaskList from "../tasklist/TaskList";
import Table from "react-bootstrap/esm/Table";
import style from "./Tasks.module.css";
import Modal from "../layout/ModalTasks";
import LinkButton from "../layout/LinkButton";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [findedTask, setFindedTask] = useState(null);
  const back_modal = useRef(null);

  const backModalRemove = () => {
    if (back_modal.current) {
      back_modal.current.style.display = "none";
      setFindedTask(null);
    }
  };

  const backModalAdd = () => {
    if (back_modal.current) {
      back_modal.current.style.display = "flex";
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (findedTask) {
      backModalAdd();
    }
  }, [findedTask]);

  const openModal = async (e) => {
    const id = e.target.parentElement.parentElement.children[2].innerText;
    await findTaskById(id);
  };

  const DeleteTaskById = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
    } catch (error) {
      console.error("Erro ao deletar a tarefa:", error);
    }
  };

  const deleteTask = async (e) => {
    const id = e.target.parentElement.parentElement.children[2].innerText;
    const deletedTask = e.target.parentElement.parentElement;
    await deletedTask.remove();
    DeleteTaskById(id);
  };

  const findTaskById = async (id) => {
    try {
      const response = await api.get(`/tasks/${id}`);
      setFindedTask(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefa:", error);
    }
  };

  return (
    <>
      {findedTask && (
        <Modal
          back_modal={back_modal}
          handleOnClick={backModalRemove}
          name={findedTask.name}
          desc={findedTask.description}
          date={findedTask.createdAt}
          id={findedTask._id}
        />
      )}
      <div className={style.task_container}>
        <h2 className={style.title}>Tarefas</h2>
        <div className={style.list_container}>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data de Criação</th>
                <th>ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskList
                  id={task._id}
                  key={task._id}
                  name={task.name}
                  date={task.createdAt}
                  className={task._id}
                  handleOnClick={openModal}
                  handleDelete={deleteTask}
                />
              ))}
            </tbody>
          </Table>
          <LinkButton to="/newtask" text="Criar Task" />
        </div>
        
      </div>
    </>
  );
};

export default Tasks;
