import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import App from './App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });
});
