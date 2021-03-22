import { getHex } from "pastel-color";
import { CloseOutlined } from "@ant-design/icons";

export function TodoItem(props) {
  // keyword: Object Destructuring
  const { index, value, remove } = props;
  return (
    <div
      style={{
        width: 320,
        margin: "8px auto",
        padding: 4,
        color: "#fff",
        textAlign: "center",
        position: "relative",
        fontSize: "1.2em",
        fontWeight: "600",
        backgroundColor: getHex(value),
      }}
    >
      {value}

      <CloseOutlined
        style={{
          position: "absolute",
          right: 8,
          bottom: 8,
          width: 16,
          height: 16,
          fontSize: 12,
          cursor: "pointer",
        }}
        onClick={() => {
          remove(index);
        }}
      />
    </div>
  );
}
