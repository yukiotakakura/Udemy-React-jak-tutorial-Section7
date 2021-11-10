import React from "react";

// このようにcssをコンポーネントに書くようにすることもできる
const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    bordeRadius: "8px"
};

export const InputTodo = (props) => {
    // propsを分割代入
    const { todoText, onChange, onClick, disabled } = props;
    return (
        <div style={style}>
            <input
                placeholder="TODOを入力"
                value={todoText}
                onChange={onChange}
                disabled={disabled}
            />
            <button disabled={disabled} onClick={onClick}>
                追加
            </button>
        </div>
    );
};