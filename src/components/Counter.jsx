import { useDispatch, useSelector } from "react-redux";
import { selectCounterValue } from "../store/counter/selectors";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  performCounterReset,
} from "../store/counter/slice";
import { useState } from "react";

const Counter = () => {
  const counterValue = useSelector(selectCounterValue);

  const [incrementAmaunt, setIncrementAmaunt] = useState();

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  const incrementCounterByAmount = () => {
    dispatch(incrementByAmount(incrementAmaunt));
  };

  const incrementRestart = () => {
    dispatch(reset(incrementAmaunt));
  };

  return (
    <>
      <div>{counterValue}</div>
      <button className="" onClick={incrementCounter}>
        Increment
      </button>
      <button className="" onClick={decrementCounter}>
        Decrement
      </button>
      <input
        type="text"
        value={incrementAmaunt}
        onChange={(e) => setIncrementAmaunt(Number(e.target.value))}
      />
      <button className="" onClick={incrementCounterByAmount}>
        Add Amount
      </button>
      <button className="" onClick={incrementRestart}>
        Delete
      </button>
      <button className="" onClick={() => dispatch(performCounterReset())}>
        Reset
      </button>
    </>
  );
};
export default Counter;