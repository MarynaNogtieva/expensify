import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import  getVisibleExpenses  from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'

const store = configureStore();
console.log(store.getState());


// store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 2000 }));

// store.dispatch(addExpense({ description: 'Gas bill', amount: 40, createdAt: 21000}));

// store.dispatch(addExpense({ description: 'Rent bill', amount: 109500}));

// store.dispatch(setTextFilter('bill'));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
  console.log(visibleExpenses);
})

//  store.dispatch(setStartDate(-2000));

//  store.dispatch(setEndDate(30000000000000000 * 1000000000000));

 const jsx = (
   <Provider store={store}>
    <AppRouter />
   </Provider>
 );

 let hasRendered = false;
 const renederApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
 };
// ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

//confirm if logged in or not
firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renederApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout())
    renederApp();
    history.push('/');
  }
});
