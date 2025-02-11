import style from './NewTask.module.css'
import ProjectForm from '../form/ProjectForm'

function NewTask() {

    return (

        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar aos serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>

    )
   
   }
   
   export default NewTask