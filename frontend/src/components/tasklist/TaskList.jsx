import style from "./TaskList.module.css";

function TaskList({ name, date, id, handleOnClick, handleDelete }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{id}</td>
      <td className={style.td_button}>
        <button
          className={`${style.list_button} ${style.edit}`}
          onClick={handleOnClick}
        ></button>
        <button className={`${style.list_button} ${style.delete} `}
        onClick={handleDelete}
        ></button>
      </td>
    </tr>
  );
}

export default TaskList;
