import { useLocation } from 'react-router-dom';
import style from './Tasks.module.css';
import { useState, useEffect } from 'react';
import api from '../../api';
import CardTask from '../card/CardTask';



const Tasks = () => {
  
  function copyToClipboard(e){
    navigator.clipboard.writeText(e.target.parentElement.parentElement.id)
    .then(alert('ID Copiado para Área de Transferência'))
  }
  

    const [tasks, setTasks] = useState([]);
    const [copy, setCopy] = useState('');
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await api.get('/tasks');
          setTasks(response.data);

          console.log(response.data.body);
        
        } catch (error) {
          console.error('Erro ao buscar tarefas:', error);
        }
      };

      fetchTasks();
    }, []);

    return (
        <div className={style.task_container}>
            <h2 className={style.title}>Tarefas</h2>
            <div className={style.card_container}>
                {tasks.map(task => (
                    console.log(task._id),
                    <CardTask id={task._id} key={task._id} name={task.name} desc={task.description} date={task.createdAt} className={task._id} handleOnClick={copyToClipboard} />

                ))}
            </div>
        </div>
    );
};

export default Tasks;
