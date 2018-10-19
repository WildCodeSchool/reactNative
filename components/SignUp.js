import React from 'react';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import { Alert, Button, View } from 'react-native';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FormLabel>Username</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <Button title="SUBMIT" onPress={() => Alert.alert('Touché')} />
      </View>
    );
  }
}

export default SignUp;
