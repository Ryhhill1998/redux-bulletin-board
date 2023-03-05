import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Bulletin Board</h1>

            <form>
                <h2>Add new post</h2>

                <label>
                    Post title
                    <input type="text" required />
                </label>

                <label>
                    Author
                    <input type="text" required />
                </label>

                <label>
                    Post title
                    <textarea rows="5" required />
                </label>

                <button>Save post</button>
            </form>
        </div>
    );
}

export default App;
