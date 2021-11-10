import React, { useState } from "react";
import "./styles.css";
// 入力エリアコンポーネントをインポートする
import { InputTodo } from "./components/InputTodo";
// 未完了エリアコンポーネントをインポートする
import { IncompleteTods } from "./components/IncompleteTodos";
// 完了エリアコンポーネントをインポートする
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
    // 入力値を保持するState変数
    const [todoText, setTodoText] = useState("");
    // 未完了配列を保持するState変数
    const [incompleteTods, setIncompleteTods] = useState([]);
    // 完了配列を保持するState変数
    const [completeTodos, setCompleteTodos] = useState([]);

    // inputの要素がonChangeで変更があった時にこの変数eventに入力値が入る
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    // 追加ボタンがクリックされたら
    const onClickAdd = () => {
        // もしも何も入力されなかった場合は何もしない
        if (todoText === "") return;
        const newTodos = [...incompleteTods, todoText];
        setIncompleteTods(newTodos);
        // input要素を初期化
        setTodoText("");
    };

    // 削除ボタンがクリックされたら
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTods];
        newTodos.splice(index, 1); // 削除
        setIncompleteTods(newTodos); // State更新
    };

    // 完了ボタンがクリックされたら
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTods];
        newIncompleteTodos.splice(index, 1); // 削除

        const newCompleteTodos = [...completeTodos, incompleteTods[index]];
        setIncompleteTods(newIncompleteTodos); // State更新
        setCompleteTodos(newCompleteTodos); // State更新
    };

    // 戻すボタンがクリックされたら
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1); // 削除

        const newIncompleteTodos = [...incompleteTods, completeTodos[index]];
        setCompleteTodos(newCompleteTodos); // State更新
        setIncompleteTods(newIncompleteTodos); // State更新
    };

    return (
        <>
            {/*  入力エリアコンポーネントを配置。propsで値や関数を渡す */}
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={incompleteTods.length >= 5}
            />
            {/*  未完了エリアの配列が5以上がtrueの場合に「＆＆」以降を返す */}
            {/*  つまり、未完了エリアの配列が5以上の場合にエラーメッセージを表示する */}
            {incompleteTods.length >= 5 && (
                <p style={{ color: "red" }}>
                    登録できるtodoは5個までとなります。消化してください。
                </p>
            )}

            {/*  未完了エリアコンポーネントを配置。propsで値や関数を渡す */}
            <IncompleteTods
                todos={incompleteTods}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            {/*  完了エリアコンポーネントを配置。propsで値や関数を渡す */}
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
};
