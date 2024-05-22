import { useEffect } from "react";
import { apiResponse, useFetchApi } from "../../hooks/useFetchApi";
import { setPosts } from "../../reducers/PostsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { REACT_CONSTANTS } from "../../constants";

export const PostList = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => {
        const postItems = state.posts.posts;
        if (state.posts.searchFilter !== "") {
            return postItems.filter((post: any) =>
                post.title.toLowerCase().includes(state.posts.searchFilter)
            );
        } else {
            return postItems;
        }
    });

    const apiEndpoint = `${REACT_CONSTANTS.BASE_URL.TYPICODE_API}/posts`;
    const apiResponse: apiResponse = useFetchApi(apiEndpoint);
    const { status, data, error, loading } = apiResponse;

    const renderPostList = () => {
        return (
            <>
                {posts?.length > 0 ? (
                    <div className="post-list">
                        <ul>
                            {posts?.map((post: any) => {
                                return (
                                    <li key={post.id}>
                                        <div className="postId">{post.id}</div>
                                        <div className="postTitle">
                                            {post.title}
                                        </div>
                                        <div className="postBody">
                                            {post.body}
                                        </div>
                                        <div className="postUserid">
                                            Created By: {post.userId}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <p className="error">No posts found</p>
                )}
            </>
        );
    };

    useEffect(() => {
        if (data?.length > 0 && status === 200) dispatch(setPosts({ data }));
        // eslint-disable-next-line
    }, [data, status]);
    return (
        <>
            {loading ? <p className="loading">Loading...</p> : ""}
            {error ? <p className="error">Something wend wrong</p> : ""}
            <div className="totalItem">
                <p>Total Posts: {posts?.length}</p>
            </div>
            {renderPostList()}
        </>
    );
};
