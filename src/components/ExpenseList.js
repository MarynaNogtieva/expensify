import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.map((expense) => {
          return <ExpenseListItem key={ expense.id } {...expense} />
        })}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
