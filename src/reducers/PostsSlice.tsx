import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostState {
    posts: Post[];
    searchFilter: string;
}

export const initialState: PostState = {
    posts: [],
    searchFilter: "",
};

const isDuplicatePost = (state: PostState, post: Post) => {
    const duplicates = state.posts.filter((item) => item.id === post.id);
    return duplicates.length > 0 ? true : false;
};

export const PostsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            return { posts: [...action.payload.data], searchFilter: "" };
        },
        addPostReducer: (state, action: PayloadAction<Post>) => {
            if (!isDuplicatePost(state, action.payload)) {
                return {
                    posts: [...state.posts, action.payload],
                    searchFilter: "",
                };
            } else {
                return { posts: [...state.posts], searchFilter: "" };
            }
        },
        searchPostReducer: (
            state = initialState,
            action: PayloadAction<{ value: string }>
        ): PostState => {
            return {
                posts: state.posts,
                searchFilter: action.payload.value.toLowerCase().trim(),
            };
        },
    },
});

export default PostsSlice.reducer;
export const { setPosts, addPostReducer, searchPostReducer } =
    PostsSlice.actions;
