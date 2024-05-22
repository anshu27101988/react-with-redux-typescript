import { useEffect, useState } from "react";
import "./post.css";
import { PostList } from "./PostList";
import { useAppDispatch } from "../../store";
import { searchPostReducer } from "../../reducers/PostsSlice";

const PostApp = () => {
    const [postSearchInput, setPostSearchInput] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchPostReducer({ value: postSearchInput }));
        // eslint-disable-next-line
    }, [postSearchInput]);

    return (
        <>
            <h1>Posts</h1>
            <div className="searchInputContainer">
                <input
                    name="searchInput"
                    className="searchChild searchInput"
                    value={postSearchInput}
                    placeholder="Type to search..."
                    onChange={(e) => setPostSearchInput(e.target.value)}
                />
                <button
                    className="searchChild btnInput searchClear"
                    type="button"
                    onClick={() => setPostSearchInput("")}
                >
                    &nbsp;&nbsp;CLEAR&nbsp;
                </button>
            </div>
            <PostList />
        </>
    );
};

export default PostApp;
