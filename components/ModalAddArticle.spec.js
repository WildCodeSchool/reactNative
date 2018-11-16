import React from 'react';
import { shallow } from 'enzyme';
import { View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import ModalAddArticle from './ModalAddArticle';

describe('ArticlesToRead', () => {
  it('renders View"', () => {
    const wrapper = shallow(<ModalAddArticle />);
    expect(wrapper.find(View)).toHaveLength(4);
  });
  describe('Within View', () => {
    it('renders a Modal', () => {
      const wrapper = shallow(<ModalAddArticle />);
      expect(wrapper.find(Modal)).toHaveLength(1);
    });
    it('renders a Button', () => {
      const wrapper = shallow(<ModalAddArticle />);
      expect(wrapper.find(Button)).toHaveLength(2);
    });
  });
});
