import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from '../slicer/counterSlice';

export default function Counter() {

   const count = useSelector(state => state.couter.value);
   const dispatch = useDispatch();

  return (
    <div>
        {/* <button onClick={()=>dispatch({type:'UP', step: 1})}>+</button> */}
        {/* <button onClick={()=>dispatch({type:'counterSlice/UP', step: 1})}>+</button> */}
        <button onClick={()=>dispatch(counterSlice.actions.UP(1))}>+</button>
        <p>{count}</p>
    </div>
  )
}
