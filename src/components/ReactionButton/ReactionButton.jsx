import "./ReactionButton.css";

import {useDispatch} from "react-redux";
import {addPostReaction} from "../../features/posts/postsSlice";

const ReactionButton = ({id, name, emoji, votes}) => {

    const dispatch = useDispatch();

    const handleClick = () => dispatch(addPostReaction({id, reaction: name}));

    return <div><span className="emoji" onClick={handleClick}>{emoji}</span> {votes}</div>;
}

export default ReactionButton;