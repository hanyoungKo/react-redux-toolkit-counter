import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0}, // 초기값
    reducers:{
      UP:(state,action)=>{
        state.value = state.value + action.payload;
      }
  
    }
});

