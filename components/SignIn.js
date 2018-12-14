import React from 'react';
import {
  FormLabel,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
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
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#B9B9B9',
  },
  input: {
    height: 50,
    width: '100%',
    color: 'gray',
    borderColor: 'gray',
    borderWidth: 2,
    paddingLeft: 5,
    backgroundColor: 'black',
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.fr',
      password: '123456',
      loading: false,
    };
  }

  signIn = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    this.setState({ loading: true });
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ loading: false });
        history.push('/articles');
      })
      .catch(error => Alert.alert(error.message));
  };

  render() {
    const { email, password, loading } = this.state;
    return (
      <ImageBackground
        source={{
          uri:
            'https://media1.tenor.com/images/d832a66a532d9bfb2b54fb8ac5c1fcf4/tenor.gif?itemid=9474515',
        }}
        style={{ width: '100%', height: '100%', borderColor: 'black' }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <View style={styles.view}>
            <FormLabel>Email</FormLabel>
            <TextInput
              style={styles.input}
              value={email}
              keyboardType="email-address"
              onChangeText={value => this.setState({ email: value })}
            />
            <FormValidationMessage>
              {validator.isEmpty(email) ? 'This field is required' : null}
            </FormValidationMessage>
            <FormLabel>Password</FormLabel>
            <TextInput
              style={styles.input}
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
      </ImageBackground>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignIn);
