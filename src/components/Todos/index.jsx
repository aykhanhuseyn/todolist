import React from "react";
import style from "./todos.module.css";

export const Todos = ({ todoList }) => {
  return (
    <ul className={style._todoList}>
      {todoList.map((element, index) => {
        const h = element.createTime.getHours();
        const m = element.createTime.getMinutes();
        return (
          <li className={style._todoList__item}>
            <h1 className={style._todoList__item__title}>{element.title}</h1>
            <span className={style._todoList__item__category}>
              {element.category}
            </span>
            <span className={style._todoList__item__time}>
              {h}:{m}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
