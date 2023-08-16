 
 import { createSlice } from "@reduxjs/toolkit";
 

 const initialState = []
 const redirectSlice = createSlice({
    name:'redirect',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload);
        }
    }
 })


 export const{add} = redirectSlice.actions;
 export default redirectSlice.reducer