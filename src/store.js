import {configureStore} from '@reduxjs/toolkit';
import { counterSlice } from './slicer/counterSlice';

const store = configureStore({
  reducer:{
    couter: counterSlice.reducer,
  }
});

export default store;

