import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  console.log('running');
  switch(action.type){
    case 'increment_count':
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
});



// increment count
// Actions - object that gets sent to the store
// walk, stop_walking, sit, get_up, walk --- sstate is changing

// increment, decrement, reset
// 1. increment
store.dispatch(
{
  type: 'increment_count'
});
store.dispatch(
  {
    type: 'increment_count'
  });

console.log(store.getState());