import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter, setEndDate, setStartDate } from './actions/filters';

import  getVisibleExpenses  from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 2000 }));

store.dispatch(addExpense({ description: 'Gas bill', amount: 40, createdAt: 21000}));

store.dispatch(setTextFilter('bill'));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
  console.log(visibleExpenses);
})

 store.dispatch(setStartDate(-2000));

 store.dispatch(setEndDate(30000));

 const jsx = (
   <Provider store={store}>
    <AppRouter />
   </Provider>
 )
 ReactDOM.render(jsx, document.getElementById('app'));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
