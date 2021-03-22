import { useState } from "react";
import "./App.css";
import { TodoItem } from "./TodoItem";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const enterValue = () => {
    if (!input) return; // ignore empty input

    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">React TODO App</header>
      <div className="App-input" style={{ margin: "16px auto" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") enterValue();
          }}
        />
        <input type="submit" value="OK" onClick={enterValue} />
      </div>
      <div className="App-todo-items">
        {items.map((item, index) => {
          return <TodoItem key={`item-${index}`} value={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
