import React from 'react';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';

import ArticlesToRead from './ArticlesToRead';

describe('ArticlesToRead', () => {
  it('renders text "Articles To Read"', () => {
    const wrapper = shallow(<ArticlesToRead />);
    expect(
      wrapper
        .find(View)
        .find(Text)
        .dive()
        .text()
    ).toEqual('Articles To Read');
  });
});
