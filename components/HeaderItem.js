import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Alert, Text } from 'react-native';
import { withRouter } from 'react-router-native';
import fire from '../firebase/firebase';

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Guest' };
  }

  componentDidMount() {
    this.ref = fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ name: user.displayName });
      }
    });
  }

  componentWillUnmount() {
    this.ref();
  }

  handleSignOut = () => {
    const { history } = this.props;
    fire
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  render() {
    const { name } = this.state;
    return (
      <Header
        centerComponent={{ text: 'DARK SIDE', style: { color: '#fff' } }}
        rightComponent={
          <Icon
            style={{ backgroundColor: 'black' }}
            name="sign-out"
            type="octicon"
            color="#fff"
            onPress={() => this.handleSignOut()}
          />
        }
        leftComponent={<Text style={{ color: 'white' }}>{name}</Text>}
      />
    );
  }
}

HeaderItem.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HeaderItem);
