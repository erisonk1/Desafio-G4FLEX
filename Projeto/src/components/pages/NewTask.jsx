import { useNavigate } from 'react-router-dom';
import style from './NewTask.module.css'
import ProjectForm from '../project/ProjectForm'
import Container from '../layout/Container'
function NewTask() {
    const navigate = useNavigate();

    function createPost(project) {
        // initalize cost and services
        project.cost = 0
        project.services = []

        fetch("mongodb+srv://erisonkaua:Su1zmIjBD8yFMCHI@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api", {
            method: "POST",
            headers: {'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            //redirect
           navigate('/projects',{state: {message: 'Projeto Criado com Sucesso'}} )
        })
        .catch(err => console.log(err))
    }
    return (

        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar aos serviços</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost}/>

        </div>

    )
   
   }
   
   export default NewTask