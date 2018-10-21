import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Segment from './components/Segment';

import SignUp from './components/SignUp';

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

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCogKIlxdZhndoksUKFJvUcaJ01DbwHCMM',
        authDomain: 'projet2alternance.firebaseapp.com',
        databaseURL: 'https://projet2alternance.firebaseio.com',
        projectId: 'projet2alternance',
        storageBucket: 'projet2alternance.appspot.com',
        messagingSenderId: '663474905671',
      });
    }
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/articles" component={Segment} />
        </View>
      </NativeRouter>
    );
  }
}
