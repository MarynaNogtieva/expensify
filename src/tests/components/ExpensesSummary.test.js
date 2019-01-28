import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';


test('should correctly rener EspensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={23454} />)
  expect(wrapper).toMatchSnapshot();
});

test('should correctly rener EspensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={23454} />)
  expect(wrapper).toMatchSnapshot();
});