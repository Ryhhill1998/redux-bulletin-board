import './App.css';
import NewPostForm from "./components/NewPostForm/NewPostForm";
import Post from "./components/Post/Post";

import {useSelector} from "react-redux";

const App = () => {

    const posts = useSelector(state => state.posts.allPosts);

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
                        <Post key={i} {...post} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
