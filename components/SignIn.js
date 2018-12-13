import React from 'react';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  Button,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { withRouter } from 'react-router-native';
import validator from 'validator';
import fire from '../firebase/firebase';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  signIn = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    this.setState({ loading: true });
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ loading: false });
        history.push('/articles');
      })
      .catch(error => Alert.alert(error.message));
  };

  render() {
    const { email, password, loading } = this.state;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={styles.view}>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={email}
            keyboardType="email-address"
            onChangeText={value => this.setState({ email: value })}
          />
          <FormValidationMessage>
            {validator.isEmpty(email) ? 'This field is required' : null}
          </FormValidationMessage>
          <FormLabel>Password</FormLabel>
          <FormInput
            value={password}
            secureTextEntry
            onChangeText={value => this.setState({ password: value })}
          />
          <FormValidationMessage>
            {validator.isEmpty(password) ? 'This field is required' : null}
          </FormValidationMessage>
          <Button
            buttonStyle={styles.button}
            title="Sign In"
            onPress={this.signIn}
            loading={loading}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignIn);
