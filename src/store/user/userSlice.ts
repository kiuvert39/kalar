import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "zod";


export const initialState = {
    currentUser: null,
    error: false
} 


 const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        signinSuccess: (state, action)=> {
            state.currentUser = action.payload;
            state.error = false
        },
        signinFailure: (state, action)=> {
            state.currentUser = action.payload;
            state.error = false
        },
        signout:(state)=>{
            state.currentUser = null
        } 
     }
 })

 export const { signinFailure,signinSuccess,signout } = userSlice.actions
 export default userSlice.reducer;