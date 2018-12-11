import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ModalAddArticle from './ModalAddArticle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});

class ArticlesAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>All articles</Text>
        </ScrollView>
        <View>
          <ModalAddArticle />
        </View>
      </View>
    );
  }
}

export default ArticlesAll;
