import React from 'react';
import { shallow } from 'enzyme';
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

