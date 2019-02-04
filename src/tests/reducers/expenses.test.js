import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('shold set defaul state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('shold remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('shold not remove expense by id if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '44'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      note: '',
      description: 'phone',
      amount: 4500,
      createdAt: moment().valueOf()
    }
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('shold edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'test'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('test');
});

test('shold not edit expense by id if there is no expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'test'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('');
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});