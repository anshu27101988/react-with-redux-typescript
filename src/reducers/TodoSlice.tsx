import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    searchFilter: string;
}

export const initialState: TodoState = {
    todos: [],
    searchFilter: "",
};

const isDuplicateTodo = (state: TodoState, todo: Todo) => {
    const duplicates = state.todos.filter((item) => item.id === todo.id);
    return duplicates.length > 0 ? true : false;
};

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodos: (state, action) => {
            return {
                todos: [...action.payload.data],
                searchFilter: state.searchFilter,
            };
        },
        addTodoReducer: (state, action: PayloadAction<Todo>): TodoState => {
            if (!isDuplicateTodo(state, action.payload)) {
                return {
                    todos: [...state.todos, action.payload],
                    searchFilter: state.searchFilter,
                };
            } else {
                return {
                    todos: [...state.todos],
                    searchFilter: state.searchFilter,
                };
            }
        },
        toggleTodoReducer: (
            state,
            action: PayloadAction<{ id: number }>
        ): TodoState => {
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id)
                        return { ...todo, completed: !todo.completed };
                    return todo;
                }),
                searchFilter: state.searchFilter,
            };
        },
        removeTodoReducer: (
            state,
            action: PayloadAction<{ id: number }>
        ): TodoState => {
            return {
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.id
                ),
                searchFilter: state.searchFilter,
            };
        },
        searchTodoReducer: (
            state = initialState,
            action: PayloadAction<{ value: string }>
        ): TodoState => {
            return {
                todos: state.todos,
                searchFilter: action.payload.value.toLocaleLowerCase().trim(),
            };
        },
    },
});

export default TodoSlice.reducer;
export const {
    setTodos,
    addTodoReducer,
    toggleTodoReducer,
    removeTodoReducer,
    searchTodoReducer,
} = TodoSlice.actions;
