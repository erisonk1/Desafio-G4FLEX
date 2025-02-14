import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/icon.svg"

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.container_logo}>
        <img className={style.logo} src={logo} alt="" />
        <h1 className={style.h1_navbar}>Tasks</h1>
      </div>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/">Início</Link>
        </li>
        <li className={style.item}>
          <Link to="/tasks">Tarefas</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
