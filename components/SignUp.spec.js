import React from 'react';
import { shallow } from 'enzyme';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import { Button, View } from 'react-native';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('render View', () => {
    const SignInWrapper = shallow(<SignUp.WrappedComponent />);
    expect(SignInWrapper.find(View));
  });
  describe('Within View', () => {
    it('render FormLabel', () => {
      const SignInWrapper = shallow(<SignUp.WrappedComponent />);
      expect(SignInWrapper.find(FormLabel)).toHaveLength(3);
    });
    it('render FormInput', () => {
      const SignInWrapper = shallow(<SignUp.WrappedComponent />);
      expect(SignInWrapper.find(FormInput)).toHaveLength(3);
    });
    it('render FormValidationMessage', () => {
      const SignInWrapper = shallow(<SignUp.WrappedComponent />);
      expect(SignInWrapper.find(FormValidationMessage)).toHaveLength(3);
    });
    describe('Show ArticlesAll onPress', () => {
      it('redirect to path "./articles', () => {
        const historyMock = { push: jest.fn() };
        const SignInWrapper = shallow(
          <SignUp.WrappedComponent history={historyMock} />
        );
        SignInWrapper.find(Button).simulate('Press');
        expect(historyMock.push.mock.calls[0]).toEqual(['/articles']);
      });
    });
  });
});
