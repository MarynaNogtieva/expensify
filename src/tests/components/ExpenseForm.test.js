import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid data form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    // docs for more info: https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});

    // fetch state: https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', { 
		target: { value: value } 
	});
	
	expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea change', () => {
	const value = 'New note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', { 
		target: { value: value } 
	});
	
	expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid input', () => {
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', { 
		target: { value: value } 
	});
	
	expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
	const value = '23wewew.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', { 
		target: { value: value } 
	});
	
	expect(wrapper.state('amount')).toBe('');
});

// test('should call onSubmit prop for valid form submition', () => {
// 	const onSubmitSpy = jest.fn();
// 	onSubmitSpy('Andrew');
// 	// https://jestjs.io/docs/en/expect
// 	expect(onSubmitSpy).toHaveBeenCalledWith('Andrew');
// });

test('should call onSubmit prop for valid form submition', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  //enzyme method
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new date on date change', () => {
  const calendarFocused = true;
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper.state('calendarFocused')).toEqual(false);
  //enzyme method
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: calendarFocused });
  expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});


