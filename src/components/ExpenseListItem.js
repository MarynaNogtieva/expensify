import React from 'react';


const ExpenseListItem = ({ expenses }) => {
  return (
    <div>
      {
        expenses.map((expense) => {
          return (
          <p key={ expense.id }>
            { expense.description } &nbsp;
            { expense.amount } &nbsp;
            { expense.createdAt }
          </p>
          )
        })
      }
    </div>
  );
};

export default ExpenseListItem;