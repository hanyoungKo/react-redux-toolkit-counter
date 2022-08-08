import './App.css';
import Counter from './components/Counter';
// import {createStore} from 'redux';
import store from './store';
import { Provider } from 'react-redux';

// const reducer=(state,action)=>{
//   if(action.type === "UP"){
//     return {...state, value: state.value + action.step}
//   }else{
//     return state;
//   }
  
// }
// const initialState = {value:0}; // 초기값
// const store = createStore(reducer, initialState);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Counter></Counter>
        </Provider>
    </div>
  );
}

export default App;
