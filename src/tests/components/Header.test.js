import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// });

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Expensify');
  // we added configuration in jet.config.json to avoid using toJson here
  // expect(toJson(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});


