import { useState, useEffect } from 'react';
import api from '../../api';
import TaskList from '../card/TaskList';
import Table from 'react-bootstrap/esm/Table';
import style from './Tasks.module.css';
import Modal from '../layout/modal';
import { useRef } from 'react';

const Tasks = () => {
 

  const [tasks, setTasks] = useState([]);
  const [findedTasks, setFindedTasks] = useState([]);
  const [displayModal, setDisplayModal] = useState([]);
  const backModalRemove = () => back_modal.current.style.display = 'none'
   const backModalAdd = () => back_modal.current.style.display = 'flex'
  const back_modal = useRef('null')
  const task_container = useRef('null')

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  function openModal(e) {
    const id = e.target.parentElement.parentElement.children[2].innerText
    console.log(e.target.parentElement.parentElement.children[2].innerText)
    console.log(back_modal.current)
    findTaskById(id)
    setDisplayModal('flex')
    backModalAdd()
  }

  const findTaskById = (id) => {
    const task = tasks.find(task => task._id === id);
    setFindedTasks(task)
    console.log(findedTasks)
    return task;
  };


  return (
    <>
    <Modal back_modal={back_modal} handleOnClick={backModalRemove} name={findedTasks.name} desc={findedTasks.description} date={findedTasks.createdAt} id={findedTasks._id}/>
    <div ref={task_container} className={style.task_container}>
      <h2 className={style.title}>Tarefas</h2>
      <div className={style.card_container}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Criação</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <TaskList id={task._id} key={task._id} name={task.name} date={task.createdAt} className={task._id} handleOnClick={openModal} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </>
  );
};

export default Tasks;
