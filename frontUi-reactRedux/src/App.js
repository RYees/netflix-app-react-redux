import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index';
function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
    // dispatch({type: 'INC'});
  };
  
  const decrement = () => {
    dispatch(actions.decrement());
    // dispatch({type: 'DEC'});
  }

  const addBy = () => {
    dispatch(actions.addBy(10));
   // dispatch({type: 'ADD', payload: 10});
  }
  return (
    <div>
     <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add by 10</button>  
    </div>
  );
}

export default App;
