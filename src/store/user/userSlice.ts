import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    // other user properties
  }

  interface UserState {
    currentUser: User | null;
    error: boolean;
    email: string | null;
    isAuthenticated: boolean;
  }
  

export const initialState: UserState  = {
    currentUser: null,
    error: false,
    email: null,
    isAuthenticated: false,
} 



 const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        signinSuccess: (state, action: PayloadAction<{ user: User }>)=> {
            state.currentUser = action.payload.user;
            state.email = action.payload.user.email;
            state.isAuthenticated = true;
            state.error = false
        },
        signinFailure: (state, action)=> {
            state.currentUser = action.payload;
            state.isAuthenticated = false;
            state.error = false
        },
        signout:(state)=>{
            state.currentUser = null
            state.isAuthenticated = false;
            state.email = null;
        } 
     }
 })

 export const { signinFailure,signinSuccess,signout } = userSlice.actions
 export default userSlice.reducer;