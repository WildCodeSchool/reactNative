import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function MyArticles() {
  return (
    <View style={styles.container}>
      <Text>My Articles</Text>
    </View>
  );
}
