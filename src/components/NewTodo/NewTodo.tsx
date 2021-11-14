import React, { FC, useRef } from "react";
import { NewTodoProps } from "../../types/todos";
import "./NewTodo.css";

export const NewTodo: FC<NewTodoProps> = ({onSetTodo}): JSX.Element => {

    const textInputRef =  useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if(enteredText.length > 0) {
            onSetTodo(enteredText);
            textInputRef.current!.value = "";
        } else {
            alert("Too short...");
        }
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef}/>
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    );
};
