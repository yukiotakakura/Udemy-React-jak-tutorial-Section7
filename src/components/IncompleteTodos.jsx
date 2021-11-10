import React from "react";

export const IncompleteTods = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        // Reactにおいてマップ処理する場合はkeｙをつけること
                        <div key={todo} className="list-row">
                            <li>{todo}</li>
                            {/*  引数を指定する場合は、アロー関数形式で */}
                            <button
                                onClick={() => {
                                    onClickComplete(index);
                                }}
                            >
                                完了
                            </button>
                            {/*  引数を指定する場合は、アロー関数形式で */}
                            <button
                                onClick={() => {
                                    onClickDelete(index);
                                }}
                            >
                                削除
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
