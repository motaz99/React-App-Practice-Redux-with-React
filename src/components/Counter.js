import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  
  
  const increment = () => {
    dispatch(counterActions.increment())
  };
  
  const increase = () => {
    dispatch(counterActions.increase(5))
  }
  
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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
