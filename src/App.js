import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
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
        />
        <input
          type="submit"
          value="OK"
          onClick={() => {
            setItems([...items, input]);
            setInput("");
          }}
        />
      </div>
      <div className="App-todo-items">{items.join(", ")}</div>
    </div>
  );
}

export default App;
