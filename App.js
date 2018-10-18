import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
        <Text>Hello World !</Text>
      </View>
    );
  }
}
