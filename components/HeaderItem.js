import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { withRouter } from 'react-router-native';
import fire from '../firebase/firebase';

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <Header
        centerComponent={{ text: 'TITLE', style: { color: '#fff' } }}
        rightComponent={
          <Icon
            name="sign-out"
            type="octicon"
            color="#fff"
            onPress={() => this.handleSignOut()}
          />
        }
      />
    );
  }
}

HeaderItem.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HeaderItem);
