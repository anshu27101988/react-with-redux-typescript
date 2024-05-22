import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "./reducers/TodoSlice";
import { PostsSlice } from "./reducers/PostsSlice";
import { ProductSlice } from "./reducers/ProductSlice";

export const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer,
        posts: PostsSlice.reducer,
        products: ProductSlice.reducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
