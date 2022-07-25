import React from "react";
import styles from './ToDo.module.scss'

const ToDo = ({ todo, toggleTask, removeTask }) => {
    return (
        <div key={todo.id + todo.key} className={styles.todo}>
            <div
                onClick={() => toggleTask(todo.id)}
                className={todo.complete ? "item-text strike" : "item-text"}
            >
                {todo.task}
            </div>
            <div className={styles.delete} onClick={() => removeTask(todo.id)}>
                x
            </div>
        </div>
    );
};

export default ToDo;
