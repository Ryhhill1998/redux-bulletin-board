import "./NewPostForm.css";

import {useDispatch} from "react-redux";
import {addPost} from "../../features/posts/postsSlice";
import {useEffect, useState} from "react";

const defaultFormFields = {
    title: "",
    author: "",
    content: ""
}

const NewPostForm = () => {

    const [canPost, setCanPost] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, author, content} = formFields;

    const dispatch = useDispatch();

    useEffect(() => {
        setCanPost(title && author && content);
    }, [author, content, title]);

    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleFieldChange = ({target}) => {
        const {name, value} = target;

        setFormFields(formFields => {
            const updatedFields = {...formFields};
            updatedFields[name] = value;
            return updatedFields;
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addPost(formFields));
        resetFormFields();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Add new post</h2>

            <label>
                Post title
                <input type="text" name="title" value={title} onChange={handleFieldChange} required />
            </label>

            <label>
                Author
                <input type="text" name="author" value={author} onChange={handleFieldChange} required />
            </label>

            <label>
                Content
                <textarea rows="5" name="content" value={content} onChange={handleFieldChange} required />
            </label>

            <button type="submit" disabled={!canPost}>POST</button>
        </form>
    );
}

export default NewPostForm;
