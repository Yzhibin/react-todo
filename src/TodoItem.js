export function TodoItem(props) {
  // keyword: Object Destructuring
  const { index, value } = props;
  return (
    <div
      style={{
        width: 320,
        margin: "8px auto",
        padding: 4,
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
      }}
      key={index}
    >
      {value}
    </div>
  );
}
