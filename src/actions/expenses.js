import uuid from 'uuid';
import database from '../firebase/firebase';
// REGULAR REDUX
// Component call action generator
// action generator returns object
// component dispatches object
// redux  runs reducers and store change

// ASYNC REDUX
// component calls action generator
// action generator return function
// component dispatches function(?)
// function runs (has ability to dispatch other actions and do whatever it wants)

// ADD EXPENSE
    // use push 
    // attach then callback
      // dispatch action
      // redirect
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
};

// will work because of redux-thunk
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt}
    
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE EXPENSE
export const removeExpense = ({id} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};

// START REMOVE EXPENSE ASYNC
export const startRemoveExpense = ({id}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      console.log('removed id ', id);
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// async action
export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses')
        .once('value')
        .then((snapshot) => {
          const expenses = [];
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
          dispatch(setExpenses(expenses));
        });
    }
};