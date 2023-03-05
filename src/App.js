import './App.css';
import NewPostForm from "./components/NewPostForm/NewPostForm";
import Post from "./components/Post/Post";

import {selectAllPosts} from "./features/posts/postsSlice";
import {useSelector} from "react-redux";

const App = () => {

    const posts = useSelector(selectAllPosts);

    return (
        <div className="App">
            <main>
                <h1>Bulletin Board</h1>

                <section>
                    <NewPostForm />
                </section>

                <section>
                    <h2>Posts</h2>

                    {posts.map((post, i) => (
                        <Post key={post.id} {...post} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
