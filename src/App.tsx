import React, {FC, useState} from "react";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { todos } from "./mocks/todos";
import { TodoItem } from "./types/todos";

const App: FC = (): JSX.Element => {

  const [todoItems, setTodosItems] = useState<Array<TodoItem>>(todos);

  const setTodosHandler = (text: string) => {
    setTodosItems(prevState => {
      const item: TodoItem = {
        id: Date.now().toString(),
        text: text,
      };

      return [
        ...prevState,
        item,
      ];
    });
  };

  const onDeleteTodoHandler = (id: string) => {
    setTodosItems((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onSetTodo={setTodosHandler}/>
      <TodoList onDeleteTodo={onDeleteTodoHandler} items={todoItems}/>
    </div>
  );
};

export default App;
