import style from './Home.module.css'
import LinkButton from '../layout/LinkButton'


function Home() {
return(
    <section className={style.home_container}>
        <h1>Bem-vindo ao <span>Tasks</span></h1>
        <p>Comece a gerenciar os suas Tarefas com perfeição agora mesmo!</p>
        <LinkButton to="/newtask" text="Criar Task"/>
    </section>
)
}
export default Home