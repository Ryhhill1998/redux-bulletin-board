import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title : "First post",
        author: "Jeff",
        content: "This is my first post",
        reactions: {
            like: 0,
            dislike: 0
        }
    },
    {
        id: 2,
        title : "Where is my ceremonial robe?",
        author: "King Leon",
        content: "Someone, please help me! I seem to have misplaced my glorious ceremonial robe!",
        reactions: {
            like: 0,
            dislike: 3
        }
    },
    {
        id: 3,
        title : "Second post",
        author: "Jeff",
        content: "This is my second post",
        reactions: {
            like: 0,
            dislike: 0
        }
    }
];

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push({
                id: nanoid(),
                ...action.payload,
                reactions: {
                    like: 0,
                    dislike: 0
                }
            });
        },
        addPostReaction: (state, action) => {
            const {id, reaction} = action.payload;
            const foundPost = state.find(post => post.id === id);
            foundPost.reactions[reaction] += 1;
        }
    }
});

export const selectAllPosts = state => state.posts;
export const {addPost, addPostReaction} = postsSlice.actions;
export default postsSlice.reducer;