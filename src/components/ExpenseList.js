import React from 'react';
import { connect } from 'react-redux'

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {
        props.expenses.map((expense) => {
          return <p key={ expense.id }>{ expense.description }</p>
        })
      }
    </div>
  )
};

const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);
export default ConnectedExpenseList;