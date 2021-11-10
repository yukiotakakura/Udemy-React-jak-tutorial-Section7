import React from "react";

export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div className="complete-area ">
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        // Reactにおいてマップ処理する場合はkeｙをつけること
                        <div key={todo} className="list-row">
                            <li>{todo}</li>
                            {/*  引数を指定する場合は、アロー関数形式で */}
                            <button
                                onClick={() => {
                                    onClickBack(index);
                                }}
                            >
                                戻す
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
