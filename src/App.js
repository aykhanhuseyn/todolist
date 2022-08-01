import { useState } from "react";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Modal } from "./components/Modal";
import "./App.css";

const INITIAL_VALUE = [
  {
    title: "Go to gym",
    category: "sports",
    createTime: new Date("2022.07.21 13:11"),
  },
  {
    title: "Write code",
    category: "programming",
    createTime: new Date("2022.07.23 17:10"),
  },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_VALUE);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const createTodo = ({ title, category, createTime }) => {
    const newTodo = { title, category, createTime };
    console.log({ newTodo });
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Header showModal={setModalIsVisible} />
      <Todos todoList={todos} />
      {modalIsVisible && (
        <Modal showModal={setModalIsVisible} createTodo={createTodo} />
      )}
    </div>
  );
}

export default App;
