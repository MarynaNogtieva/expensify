import moment from 'moment';

// get visible expenses
// Jan 1st 1970
// timestamps (miliseconds)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMantch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;  // will always be true if there is no start date match
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
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
