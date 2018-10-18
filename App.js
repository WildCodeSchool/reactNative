import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';

import HeaderItem from './components/HeaderItem';
import Segment from './components/Segment';

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
    firebase.initializeApp({
      apiKey: 'AIzaSyCogKIlxdZhndoksUKFJvUcaJ01DbwHCMM',
      authDomain: 'projet2alternance.firebaseapp.com',
      databaseURL: 'https://projet2alternance.firebaseio.com',
      projectId: 'projet2alternance',
      storageBucket: 'projet2alternance.appspot.com',
      messagingSenderId: '663474905671',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderItem />
        <Segment />
      </View>
    );
  }
}
