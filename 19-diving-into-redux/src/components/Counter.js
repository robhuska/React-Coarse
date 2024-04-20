// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const handleToggleCounter = () => {
    dispatch(counterActions.TOGGLE_COUNTER());
  };

  function handleIncrement() {
    dispatch(counterActions.INCREMENT());
  }

  const handleDecrement = () => {
    dispatch(counterActions.DECREMENT());
  };

  function handleIncrease(amount) {
    dispatch(counterActions.INCREASE({ amount }));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => handleIncrease(5)}>Increase</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }

//   handleDecrement() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//           <button onClick={this.handleIncrement.bind(this)}>increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProp = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   };
// };

// export default connect(mapStateToProp, mapDispatchToProps)(Counter);
