import "./Post.css";
import ReactionButton from "../ReactionButton/ReactionButton";

const Post = ({id, title, content, author, reactions}) => {

    const reactionsData = [
        {name: "like", emoji: "👍", votes: reactions["like"]},
        {name: "dislike", emoji: "👎", votes: reactions["dislike"]},
    ];

    return (
        <div className="post-container">
            <h3>{title}</h3>
            <p className="post-content">{content}</p>
            <p className="post-author">by {author}</p>

            <div className="reactions-container">
                {reactionsData.map((reaction, i) => (
                    <ReactionButton key={reaction.name + i} id={id} {...reaction} />
                ))}
            </div>
        </div>
    );
}

export default Post;