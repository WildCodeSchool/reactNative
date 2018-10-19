import React from 'react';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';

import MyArticles from './MyArticles';

describe('MyArticles', () => {
  it('renders text "My Articles"', () => {
    const wrapper = shallow(<MyArticles />);
    expect(
      wrapper
        .find(View)
        .find(Text)
        .dive()
        .text()
    ).toEqual('My Articles');
  });
});
