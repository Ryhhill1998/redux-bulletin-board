import "./NewPostForm.css";

const NewPostForm = () => {
    return (
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
                Content
                <textarea rows="5" required />
            </label>

            <button>Save post</button>
        </form>
    );
}

export default NewPostForm;