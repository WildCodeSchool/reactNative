import React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup } from 'react-native-elements';
import Segment from '../components/Segment';

describe('Segment', () => {
  it('renders a Button group', () => {
    const wrapper = shallow(<Segment />);
    expect(wrapper.find(ButtonGroup)).toHaveLength(1);
  });
});
