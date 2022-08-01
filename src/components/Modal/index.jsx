import React, { useState } from "react";

export const Modal = ({ showModal, createTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  const handleCloseModal = () => {
    showModal(false);
  };
  const handleSubmit = () => {
    createTodo({ title, category, createTime: new Date(time) });
    setTitle("");
    setCategory("");
    setTime("");
    showModal(false);
  };
  return (
    <div
      className="backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#00000033",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleCloseModal}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          width: "50%",
          minWidth: "300px",
          padding: "30px 20px",
          backgroundColor: "salmon",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <input
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        />
        <input
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        />
        <input
          name="time"
          type="date"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        />
        <button
          style={{
            width: "100%",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};
