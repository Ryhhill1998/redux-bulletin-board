import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//     {
//         id: 1,
//         title : "First post",
//         author: "Jeff",
//         content: "This is my first post",
//         reactions: {
//             like: 0,
//             dislike: 0
//         }
//     },
//     {
//         id: 2,
//         title : "Where is my ceremonial robe?",
//         author: "King Leon",
//         content: "Someone, please help me! I seem to have misplaced my glorious ceremonial robe!",
//         reactions: {
//             like: 0,
//             dislike: 3
//         }
//     },
//     {
//         id: 3,
//         title : "Second post",
//         author: "Jeff",
//         content: "This is my second post",
//         reactions: {
//             like: 0,
//             dislike: 0
//         }
//     }
// ];

const initialState = {
    allPosts: [],
    status: "idle", // "idle" | "loading" | "success" | "fail"
    error: null
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.allPosts.push({
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
            const foundPost = state.allPosts.find(post => post.id === id);
            foundPost.reactions[reaction] += 1;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success";

                const loadedPosts = action.payload.map(post => ({
                    title: post.title,

                    content: post.body,
                    reactions: {
                        like: 0,
                        dislike: 0
                    }
                }));

                state.allPosts = state.allPosts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectAllPosts = state => state.posts.allPosts;
export const getPostsStatus = state => state.posts.status;
export const getPostsError = state => state.posts.error;
export const {addPost, addPostReaction} = postsSlice.actions;
export default postsSlice.reducer;