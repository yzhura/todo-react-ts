import React, { FC } from "react";
import { TodoListProps } from "../../types/todos";
import "./TodoList.css";

export const TodoList: FC<TodoListProps> = ({items, onDeleteTodo}): JSX.Element => {

    return (
        <ul>
            {items.map((todo) => {
                return (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button>
                    </li>
                );
            })}
        </ul>
    );
};
