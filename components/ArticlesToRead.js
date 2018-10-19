import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticlesToRead() {
  return (
    <View style={styles.container}>
      <Text>Articles To Read</Text>
    </View>
  );
}
