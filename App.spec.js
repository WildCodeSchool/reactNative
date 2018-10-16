import React from 'react';
import { shallow } from 'enzyme';
import { Text, View, Button, Alert } from 'react-native';
import App from './App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });

  describe('within View', () => {
    it('renders Text with text "Open', () => {
      // écris le second test ici
      const wrapper = shallow(<App />);
      expect(
        wrapper
          .find(Text)
          .dive()
          .text()
      ).toEqual('Openspec');
    });

    it('renders Button with text "Ajouter Un article"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Button).prop('title')).toEqual('Ajouter Un article');
    });

    describe('Showing alert on button press with message "Touché"', () => {
      it('renders alert', () => {
        const spy = jest.spyOn(Alert, 'alert');
        const wrapper = shallow(<App />);
        wrapper.find(Button).simulate('Press');
        expect(spy).toHaveBeenCalled();
      });

      it('renders message "Touché"', () => {
        const wrapper = shallow(<App />);
        wrapper.find(Button).simulate('Press');
        expect(Alert.alert.mock.calls[0][0]).toEqual('Touché');
      });
    });
  });
});
