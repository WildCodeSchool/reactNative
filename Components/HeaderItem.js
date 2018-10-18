import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header
        centerComponent={{ text: 'TITLE', style: { color: '#fff' } }}
        rightComponent={
          <Icon
            name="sign-out"
            type="octicon"
            color="#fff"
            onPress={() => console.log('hello')}
          />
        }
      />
    );
  }
}

export default HeaderItem;
