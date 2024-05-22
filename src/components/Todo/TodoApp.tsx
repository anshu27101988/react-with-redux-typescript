import { useEffect, useState } from "react";
import "./todo.css";
import {
    Todo,
    addTodoReducer,
    searchTodoReducer,
} from "../../reducers/TodoSlice";
import { useAppDispatch } from "../../store";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todoInput, setTodoInput] = useState<string>("");
    const [todoSearchInput, setTodoSearchInput] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleAddTodo = () => {
        const newTodo: Todo = {
            userId: 1,
            id: Math.random() * Date.now(),
            title: todoInput,
            completed: false,
        };

        dispatch(addTodoReducer(newTodo));
        setTodoInput("");
    };

    useEffect(() => {
        dispatch(searchTodoReducer({ value: todoSearchInput }));
        // eslint-disable-next-line
    }, [todoSearchInput]);

    return (
        <div className="todoContainer">
            <h1>Add Todo</h1>
            <div className="searchInputContainer">
                <input
                    name="todoInput"
                    className="searchChild searchInput"
                    value={todoInput}
                    placeholder="Type to add new todo item..."
                    onChange={(e) => setTodoInput(e.target.value)}
                />
                <button
                    className="searchChild btnInput"
                    type="button"
                    onClick={handleAddTodo}
                >
                    ADD TODO
                </button>
            </div>
            <div className="searchInputContainer">
                <input
                    name="searchInput"
                    className="searchChild searchInput"
                    value={todoSearchInput}
                    placeholder="Type to search..."
                    onChange={(e) => setTodoSearchInput(e.target.value)}
                />
                <button
                    className="searchChild btnInput searchClear"
                    type="button"
                    onClick={() => setTodoSearchInput("")}
                >
                    &nbsp;&nbsp;CLEAR&nbsp;
                </button>
            </div>
            <TodoList />
        </div>
    );
};

export default TodoApp;
