// get visible expenses
// Jan 1st 1970
// timestamps (miliseconds)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const startDateMantch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMantch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;
