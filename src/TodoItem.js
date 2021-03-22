export function TodoItem(props) {
  // keyword: Object Destructuring
  const { index, value, remove } = props;
  return (
    <div
      style={{
        width: 320,
        margin: "8px auto",
        padding: 4,
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      {value}
      <span
        style={{ position: "absolute", right: 8, cursor: "pointer" }}
        onClick={() => {
          remove(index);
        }}
      >
        X
      </span>
    </div>
  );
}
