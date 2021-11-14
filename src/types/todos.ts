export type TodoItem = {
    id: string;
    text: string;
}

export interface TodoListProps {
    items: Array<TodoItem>;
    onDeleteTodo: (id: string) => void;
}

export interface NewTodoProps {
    onSetTodo: (text: string) => void
}