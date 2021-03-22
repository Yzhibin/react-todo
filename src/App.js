import { Input } from "antd";
import { useState } from "react";
import "./App.css";
import { TodoItem } from "./TodoItem";

const { Search } = Input;

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const enterValue = (value) => {
    // value is passed in by antd Search
    if (!value) return; // ignore empty input

    setItems([...items, value]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((v, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">React TODO App</header>
      <div className="App-input" style={{ margin: "16px auto" }}>
        <Search
          placeholder="Enter a TODO item..."
          size="large"
          style={{ width: "40%", minWidth: 320, maxWidth: 640 }}
          allowClear
          enterButton="OK"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onSearch={enterValue}
        />
      </div>
      <div className="App-todo-items">
        {items.map((item, index) => {
          return (
            <TodoItem
              key={`item-${index}`}
              value={item}
              index={index}
              remove={removeItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
