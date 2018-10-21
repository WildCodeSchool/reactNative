import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <Header
        centerComponent={{ text: 'TITLE', style: { color: '#fff' } }}
        rightComponent={
          <Icon
            name="sign-out"
            type="octicon"
            color="#fff"
            onPress={() => history.push('/')}
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
