const selectExpensesTotal = (expenses) => {
  const initialExepenses = 0;
  if(!expenses || expenses.length === 0) {
    return initialExepenses;
  } else {
    // return expenses.reduce((sum, expense)=>{
    //   sum += expense.amount;
    //   return sum;
    // },0);

    return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => {
        return sum += value;
      }, 0);
  }
};

export default selectExpensesTotal;