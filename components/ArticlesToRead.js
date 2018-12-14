import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});

export default function ArticlesToRead() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/originals/1e/72/5a/1e725a00b236422fd8210b9f083c2c53.jpg',
        }}
        style={{ width: '100%', height: '100%', borderColor: 'black' }}
      >
        <Text>Articles To Read</Text>
      </ImageBackground>
    </View>
  );
}
