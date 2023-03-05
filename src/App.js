import './App.css';
import NewPostForm from "./components/NewPostForm/NewPostForm";
import Post from "./components/Post/Post";

const posts = [
    {
        title : "First post",
        author: "Jeff",
        content: "This is my first post"
    }
];

const App = () => {
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
