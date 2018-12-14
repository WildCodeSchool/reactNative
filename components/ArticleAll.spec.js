import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import ModalAddArticles from './ModalAddArticle';

import ArticlesAll from './ArticlesAll';

describe('ArticlesAll', () => {
  it('renders View"', () => {
    const wrapper = shallow(<ArticlesAll />);
    expect(wrapper.find(View)).toHaveLength(3);
  });
  describe('Within View', () => {
    it('renders ModalAddArticles', () => {
      const wrapper = shallow(<ArticlesAll />);
      expect(wrapper.find(ModalAddArticles)).toHaveLength(1);
    });
  });
});
