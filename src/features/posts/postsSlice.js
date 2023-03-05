import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allPosts: [
        {
            id: 1,
            title : "First post",
            author: "Jeff",
            content: "This is my first post"
        },
        {
            id: 2,
            title : "Where is my ceremonial robe?",
            author: "King Leon",
            content: "Someone, please help me! I seem to have misplaced my glorious ceremonial robe!"
        },
        {
            id: 3,
            title : "Second post",
            author: "Jeff",
            content: "This is my second post"
        }
    ]
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
});

export default postsSlice.reducer;