import './App.css';
import NewPostForm from "./components/NewPostForm/NewPostForm";
import Post from "./components/Post/Post";

import {selectAllPosts, getPostsStatus, getPostsError, fetchPosts} from "./features/posts/postsSlice";
import {useSelector ,useDispatch} from "react-redux";
import {useEffect} from "react";

const App = () => {

    const dispatch = useDispatch();

    const posts = [...useSelector(selectAllPosts)];
    posts.reverse();

    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, postsStatus]);

    let content;

    if (postsStatus === "loading") {
        content = <p>Loading...</p>;
    } else if (postsStatus === "fail") {
        content = <p>{postsError}</p>;
    } else if (postsStatus === "success") {
        content = posts.map((post, i) => (
            <Post key={post.id + (i * i * i)} {...post} />
        ));
    }

    return (
        <div className="App">
            <main>
                <h1>Bulletin Board</h1>

                <section>
                    <NewPostForm />
                </section>

                <section>
                    <h2>Posts</h2>

                    {content}
                </section>
            </main>
        </div>
    );
}

export default App;
