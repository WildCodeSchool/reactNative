import React from 'react';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';

import ArticlesAll from './ArticlesAll';

describe('ArticlesAll', () => {
  it('renders text "Articles To Read"', () => {
    const wrapper = shallow(<ArticlesAll />);
    expect(
      wrapper
        .find(View)
        .find(Text)
        .dive()
        .text()
    ).toEqual('All articles');
  });
});
