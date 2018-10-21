import React from 'react';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { Button, View, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormValidationMessage>This field is required</FormValidationMessage>
        <Button title="SUBMIT" onPress={() => history.push('/articles')} />
      </View>
    );
  }
}
SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignUp);
