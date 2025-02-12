import style from "./TaskList.module.css";

function TaskList({ name, date, id, handleOnClick }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{id}</td>
      <td className={style.td_button}>
        <button
          className={`${style.card_info_id} ${style.edit}`}
          onClick={handleOnClick}
        ></button>
        <button className={`${style.card_info_id} ${style.delete}`}></button>
      </td>
    </tr>
  );
}

export default TaskList;
