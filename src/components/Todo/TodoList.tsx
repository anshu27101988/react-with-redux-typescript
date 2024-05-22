import { useEffect } from "react";
import {
    removeTodoReducer,
    setTodos,
    toggleTodoReducer,
} from "../../reducers/TodoSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiResponse, useFetchApi } from "../../hooks/useFetchApi";
import { REACT_CONSTANTS } from "../../constants";

const TodoList = () => {
    const todos = useAppSelector((state) => {
        const todoItems = state.todos.todos;
        if (state.todos.searchFilter !== "") {
            return todoItems.filter((todo: any) =>
                todo.title.toLowerCase().includes(state.todos.searchFilter)
            );
        } else {
            return todoItems;
        }
    });
    const dispatch = useAppDispatch();

    const apiEndpoint = `${REACT_CONSTANTS.BASE_URL.MOCK_API}/todos`;
    const apiResponse: apiResponse = useFetchApi(apiEndpoint);
    const { status, data, error, loading } = apiResponse;

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodoReducer({ id }));
    };
    const handleToggleTodos = (id: number) => {
        dispatch(toggleTodoReducer({ id }));
    };
    useEffect(() => {
        if (data?.length > 0 && status === 200) dispatch(setTodos({ data }));
        // eslint-disable-next-line
    }, [data, status]);

    return (
        <>
            {loading ? <p className="loading">Loading...</p> : ""}
            {error ? <p className="error">Something wend wrong</p> : ""}
            <div className="totalItem">
                <p>Total Item: {todos?.length}</p>
            </div>
            <ul className="todoList">
                {todos.length === 0 ? (
                    <p className="loading">No results found</p>
                ) : (
                    todos.map((todo: any) => (
                        <li
                            className={todo.completed ? "todoCompleted" : ""}
                            key={todo.id}
                            title={`ID: ${todo.id}`}
                        >
                            <div className="list-grid gridInput">
                                <input
                                    className="todoInputChk"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodos(todo.id)}
                                />
                            </div>
                            <div className="list-grid gridDetails">
                                <p
                                    className="todoTitle"
                                    style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "",
                                    }}
                                >
                                    {todo.title}
                                </p>
                                <p className="createdBy">
                                    - Created By: UserID {todo.userId}
                                </p>
                            </div>
                            <div className="list-grid gridRemove">
                                <button
                                    className="btnInput toBtnRemove"
                                    type="button"
                                    onClick={() => handleRemoveTodo(todo.id)}
                                    title="Remove Todo"
                                >
                                    X
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
};

export default TodoList;
