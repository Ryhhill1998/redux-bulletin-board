import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title : "First post",
        author: "Jeff",
        content: "This is my first post",
        likes: 0,
        dislikes: 0
    },
    {
        id: 2,
        title : "Where is my ceremonial robe?",
        author: "King Leon",
        content: "Someone, please help me! I seem to have misplaced my glorious ceremonial robe!",
        likes: 0,
        dislikes: 0
    },
    {
        id: 3,
        title : "Second post",
        author: "Jeff",
        content: "This is my second post",
        likes: 0,
        dislikes: 0
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
                likes: 0,
                dislikes: 0
            });
        }
    }
});

export const selectAllPosts = state => state.posts;
export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;