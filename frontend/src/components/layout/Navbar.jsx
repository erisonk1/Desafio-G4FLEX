import { Link } from 'react-router-dom';


import styles from './Navbar.module.css'

function NavBar() {
    return (
        <nav className={styles.navbar}>
           <h1 className={styles.h1_navbar}>Tasks</h1>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Início</Link></li>
                    <li className={styles.item}><Link to='/tasks'>Tarefas</Link></li>
                </ul>

      </nav>
    )
}
export default NavBar;