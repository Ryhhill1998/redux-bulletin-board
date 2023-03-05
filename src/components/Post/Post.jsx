import "./Post.css";
import Reaction from "../Reaction/Reaction";

const Post = ({title, content, author}) => {
    return (
        <div className="post-container">
            <h3>{title}</h3>
            <p className="post-content">{content}</p>
            <p className="post-author">by {author}</p>

            <div className="reactions-container">
                <Reaction emoji="👍" />
                <Reaction emoji="👎" />
            </div>
        </div>
    );
}

export default Post;