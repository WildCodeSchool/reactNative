import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Segment from './components/Segment';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/articles" component={Segment} />
          <Route exact path="/signin" component={SignIn} />
        </View>
      </NativeRouter>
    );
  }
}
