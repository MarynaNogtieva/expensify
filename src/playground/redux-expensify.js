import { createStore, combineReducers } from 'redux';

// ADD EXPENSE
// REMOVE EXPENSE
// EDIT EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters reducer
const filterDefaultState = {
  text: '',
  sortBy: 'date', // amount or date
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

//store create

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'fewfefda',
    description: 'rent',
    note: 'final payment',
    amount: 54500,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
  }
};