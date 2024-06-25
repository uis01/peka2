import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

// Async thunk for user login
export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:3000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        const message = error.response ? error.response.data.msg : error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

// Async thunk for getting current user data
export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/me');
        return response.data;
    } catch (error) {
        const message = error.response ? error.response.data.msg : error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

// Async thunk for logging out
export const LogOut = createAsyncThunk("user/LogOut", async () => {
    await axios.delete('http://localhost:3000/logout');
});

// Create slice for authentication
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            // Login User Cases
            .addCase(LoginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // Get Current User Cases
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // Logout User Cases
            .addCase(LogOut.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LogOut.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = null;
            })
            .addCase(LogOut.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

// Export reset action and auth reducer
export const { reset } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     user: null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: ""
// };

// export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI) => {
//     try {
//         const response = await axios.post('http://localhost:3000/login', {
//             email: user.email,
//             password: user.password
//         });
//         return response.data;
//     } catch (error) {
//         const message = error.response ? error.response.data.msg : error.message;
//         return thunkAPI.rejectWithValue(message);
//     }
// });

// export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('http://localhost:3000/me');
//         return response.data;
//     } catch (error) {
//         const message = error.response ? error.response.data.msg : error.message;
//         return thunkAPI.rejectWithValue(message);
//     }
// });

// export const LogOut = createAsyncThunk("user/LogOut", async () => {
//         await axios.delete('http://localhost:3000/logout');
// });

// export const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         reset: (state) => initialState
//     },
//     extraReducers: (builder) => {
//         builder.addCase(LoginUser.pending, (state) => {
//                 state.isLoading = true;
//             })
//             builder.addCase(LoginUser.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isSuccess = true;
//                 state.user = action.payload;
//             })
//             builder.addCase(LoginUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.message = action.payload;
//             });

//             // getuser
            
//             builder.addCase(getMe.pending, (state) => {
//                 state.isLoading = true;
//             })
//             builder.addCase(getMe.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isSuccess = true;
//                 state.user = action.payload;
//             })
//             builder.addCase(getMe.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.message = action.payload;
//             });
//     }
// });

// export const { reset } = authSlice.actions;
// export default authSlice.reducer;


// // import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// // import axios from "axios"

// // const initialState ={
// //     user : null,
// //     isError : false,
// //     isSuccess : false,
// //     isLoading : false,
// //     message : ""
// // }

// // export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI)=>{
// //     try {
// //         const response = await axios.post('http://localhost:3000/login', {
// //             email: user.email,
// //             password: user.password
// //         });
// //             return response.data;
// //     } catch (error) {
// //         if(error.response){
// //             const message = error.response.data.msg;
// //             return thunkAPI.rejectWithValue(message);
// //         }
    
// //     }
// // })

// // export const authSlice = createSlice({
// //     name: "auth",
// //     initialState,
// //     reducers:{
// //         reset: (state) => initialState
// //     },
// //     extraReducers: (builder) =>{
// //         builder.addCase(LoginUser.pending, (state)=>{
// //             state.isLoading = true;
// //         })
// //         builder.addCase(LoginUser.fulfilled, (state, action)=>{
// //             state.isLoading= false;
// //             state.isSuccess= true;
// //             state.user= action.payload;
// //         })
// //         builder.addCase(LoginUser.rejected, (state, action)=>{
// //             state.isLoading= false;
// //             state.isError= true,
// //             state.message = action.payload;
// //         })
// //     }
// // })
// // export const {reset}=authSlice.actions
// // export default authSlice.reducer