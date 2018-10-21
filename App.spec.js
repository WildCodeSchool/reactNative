import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import App from './App';

describe('App', () => {
  it('it has a NativeRouter component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NativeRouter));
  });
  describe('Within the NativeRouter', () => {
    it('it render a View', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(View));
    });
  });
  describe('Within the View', () => {
    it('it has 2 route components', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Route)).toHaveLength(2);
    });
  });
});
