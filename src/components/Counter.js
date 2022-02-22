import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  
  
  const increment = () => {
    dispatch({type: 'increment'})
  };
  
  const increase = () => {
    dispatch({type: 'increase', amount: 5})
  }
  
  const decrement = () => {
    dispatch({type: 'decrement'})
  }
  
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={increase}>increment by 5</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
