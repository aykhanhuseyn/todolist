import React from "react";
import style from "./header.module.css";

export const Header = ({ showModal }) => {
  const handleClick = () => {
    showModal(true);
  };
  return (
    <header className={style._header}>
      <h1 className={style._title}>Todo App</h1>
      <button className={style._create} onClick={handleClick}>
        Create
      </button>
    </header>
  );
};
