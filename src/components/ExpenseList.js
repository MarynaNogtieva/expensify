import React from 'react';
import { connect } from 'react-redux'

const ExpenseList = ({expenses, filters}) => {
  return (
    <div>
      <h1>Expense List</h1>
      {
        expenses.map((expense) => {
          return <p key={ expense.id }>{ expense.description }</p>
        })
      }
      { filters.text }
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
