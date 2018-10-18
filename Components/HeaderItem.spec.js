import React from 'react';
import { shallow } from 'enzyme';
import { Header, Icon } from 'react-native-elements';
import HeaderItem from '../components/HeaderItem';

describe('HeaderItem', () => {
  it('renders a header', () => {
    const wrapper = shallow(<HeaderItem />);
    expect(wrapper.find(Header));
  });

  describe('Within header', () => {
    it('render an Icon', () => {
      const wrapper = shallow(<HeaderItem />);
      expect(wrapper.find(Icon));
    });
  });
});
