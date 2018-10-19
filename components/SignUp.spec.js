import React from 'react';
import { shallow } from 'enzyme';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import { Button, View, Alert } from 'react-native';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('render View', () => {
    const SignInWrapper = shallow(<SignUp />);
    expect(SignInWrapper.find(View));
  });
  describe('Within View', () => {
    it('render FormLabel', () => {
      const SignInWrapper = shallow(<SignUp />);
      expect(SignInWrapper.find(FormLabel)).toHaveLength(3);
    });
    it('render FormInput', () => {
      const SignInWrapper = shallow(<SignUp />);
      expect(SignInWrapper.find(FormInput)).toHaveLength(3);
    });
    it('render FormValidationMessage', () => {
      const SignInWrapper = shallow(<SignUp />);
      expect(SignInWrapper.find(FormValidationMessage)).toHaveLength(3);
    });
    describe('Showing alert onPress', () => {
      it('render alert', () => {
        const spy = jest.spyOn(Alert, 'alert');
        const SignInWrapper = shallow(<SignUp />);
        SignInWrapper.find(Button).simulate('Press');
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
