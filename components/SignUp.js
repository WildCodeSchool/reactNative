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
    backgroundColor: '#B9B9B9',
    height: 50,
  },
  input: {
    color: 'gray',
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    paddingLeft: 5,
    backgroundColor: 'black',
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      loading: false,
    };
  }

  createUser = () => {
    const { email, password, username } = this.state;
    const { history } = this.props;
    this.setState({ loading: true });
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = fire.auth().currentUser;
        user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            console.log('profil updated');
          })
          .catch(error => {
            console.log(error);
          });
      })
      .then(() => this.setState({ loading: false }))
      .then(() => {
        history.push('/articles');
      })
      .catch(error => {
        this.setState({ loading: false });
        Alert.alert(error.message);
      });
  };

  render() {
    const { username, email, password, loading } = this.state;
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
            <FormLabel>Username</FormLabel>
            <TextInput
              style={styles.input}
              keyboardType="default"
              value={username}
              onChangeText={value => this.setState({ username: value })}
            />
            <FormValidationMessage>
              {validator.isEmpty(username) ? 'This field is required' : null}
            </FormValidationMessage>
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
              title="SUBMIT"
              onPress={this.createUser}
              loading={loading}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignUp);
