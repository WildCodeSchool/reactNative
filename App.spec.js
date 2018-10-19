import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import App from './App';
import HeaderItem from './components/HeaderItem';
import Segment from './components/Segment';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });
  describe('Within the view', () => {
    it('render Header', () => {
      const wrapper = shallow(<View />);
      expect(wrapper.find(HeaderItem));
    });
    it('render Segment', () => {
      const wrapper = shallow(<View />);
      expect(wrapper.find(Segment));
    });
  });
});
