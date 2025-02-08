import style from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import mongoose from 'mongoose'
import express from 'express'

function Home() {
    mongoose.connect('mongodb+srv://erisonkaua:Su1zmIjBD8yFMCHI@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api')
    const app = express();
    app.use(express.json());
    app.get("/", async (req, res) => {
        const task = await Task.find();
        res.send(task);
      });
return(
    <section className={style.home_container}>
        <h1>Bem-vindo ao <span>Tasks</span></h1>
        <p>Comece a gerenciar os suas Tarefas com perfeição agora mesmo!</p>
        <LinkButton to="/newtask" text="Criar Task"/>
    </section>
)
}
export default Home