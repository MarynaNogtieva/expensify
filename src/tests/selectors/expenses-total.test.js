import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
// should return 0 for no expenses
// should correctly add up a single expense
// should add up multiple expenses
test('should return 0 for no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]])
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add up a multiple expenses', () => {
  const expectedAmount = expenses[0].amount + expenses[1].amount;
  const result = selectExpensesTotal([expenses[0], expenses[1]]);
  expect(result).toBe(expectedAmount);
});
