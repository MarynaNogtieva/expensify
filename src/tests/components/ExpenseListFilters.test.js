import React from 'react'
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
    <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
    />
    )

})

test('should render ExpenseListFilters correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', ()=>{
  // enzyme helps us to change props
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

