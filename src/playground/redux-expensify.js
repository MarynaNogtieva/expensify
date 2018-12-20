import { createStore, combineReducers } from 'redux';

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