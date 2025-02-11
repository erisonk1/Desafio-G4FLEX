import { useLocation } from 'react-router-dom';
import style from './Tasks.module.css';
import { useState, useEffect } from 'react';
import api from '../../api';
import CardTask from '../card/CardTask';



const Tasks = () => {
  
  function teste(e){
    console.log(e)
  }
  
  const location = useLocation()
    const [tasks, setTasks] = useState([]);
    const [copy, setCopy] = useState('');
    let message;
    if(location.state) {
    message = location.state.message
    console.log(message)
  }
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
                    <CardTask key={task._id} name={task.name} desc={task.description} date={task.createdAt} className={task._id} handleOnClick={teste} />

                ))}
            </div>
        </div>
    );
};

export default Tasks;
