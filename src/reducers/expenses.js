// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    console.log('state', state)
    console.log('new state', [
      ...state,
      action.expense
    ]);
    return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates // override values that user wants to change
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};


console.log('expensesReducer', expensesReducer)
export default expensesReducer;
