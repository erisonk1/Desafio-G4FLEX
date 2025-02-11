import style from "./CardTask.module.css";

function CardTask({ name, desc, date, handleOnClick, id }) { // Desestruturação das props
    return (
        <div id={id} className={style.card}>
           <div>
           <h2 className={style.card_name}>{name}</h2>
           <p className={style.card_desc}>{desc}</p>
            </div>
            <div className={style.card_info}>
                <p className={style.card_info_date}>{date}</p>
                <button className={style.card_info_id} onClick={handleOnClick}>ID</button>
            </div>
        </div>
    );
}

export default CardTask;
