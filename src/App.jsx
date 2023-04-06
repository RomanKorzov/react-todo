import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    const inputValue = e.target[0].value;
    setTodos([...todos, { id: Date.now(), text: inputValue, isDone: false }]);
  }

  return (
    <div className="App">
      <Header text="todos" />
      <div className="todo__wrapper">
        <Form onSubmit={addTodo} />
        <List todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
