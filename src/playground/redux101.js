import { createStore } from 'redux';

// Action generaters => functions that return action objects

const incrementCount = (payLoad={}) => {
  return {
    type: 'increment_count',
    incrementBy: typeof payLoad.incrementBy === 'number' ? payLoad.incrementBy : 1
  }
}

const store = createStore((state = { count: 0 }, action) => {
  console.log('running');
  switch(action.type){
    case 'increment_count':
      return {
        count: state.count + action.incrementBy
      }
    case 'decrement_count':
      const decrementBy = action.decrementBy ? action.decrementBy : 1;
      return {...state, count: state.count - decrementBy }
      // return {
      //   count: state.count - 1
      // }
    case 'reset':
      return {
        count: 0
      }
    case 'set':
      const value = typeof action.value === 'number' ? action.value : 0
      return { ...state, count: value }
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// increment count
// Actions - object that gets sent to the store
// walk, stop_walking, sit, get_up, walk --- sstate is changing

// increment, decrement, reset
// 1. increment
// store.dispatch(
//   {
//     type: 'increment_count',
//     incrementBy: 5
//   }
// );
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());


store.dispatch(
  {
    type: 'decrement_count',
    decrementBy: 3
  }
);

store.dispatch(
  {
    type: 'decrement_count'
  }
);


store.dispatch(
  {
    type: 'reset'
  }
);

store.dispatch(
  {
    type: 'set',
    value: 101
  }
);
