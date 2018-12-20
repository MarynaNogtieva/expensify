import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
};

// REMOVE EXPENSE
const removeExpense = ({id} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
};

// EDIT EXPENSE
const editExpense = () => {
  return {

  }
};

// SET_TEXT_FILTER
const setTextFilter = () => {
  return {

  }
};

// SORT_BY_DATE
const sortBydate = () => {
  return {

  }
};

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {

  }
};

// SET_START_DATE
const setStartDate = () => {
  return {

  }
};

// SET_END_DATE
const setEndDate = () => {
  return {

  }
};

// Expenses reducer

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      return [...state, action.expense ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id;
      });
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


// to get channges
store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1200 }));
console.log(expenseOne)
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
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