import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import ModalAddArticle from './ModalAddArticle';
import fire from '../firebase/firebase';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ArticlesAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articles: [],
    };
  }

  componentDidMount() {
    const articles = [];
    this.setState({ loading: true });
    fire
      .database()
      .ref('articles/')
      .once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const article = { key: childKey, ...childData };
          articles.push(article);
        });
      })
      .then(() => {
        this.setState({
          articles,
          loading: false,
        });
      })
      .catch(error => Alert.alert(error));
  }

  render() {
    const { loading, articles = [] } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {loading ? (
          <View style={styles.view}>
            <ActivityIndicator />
          </View>
        ) : (
          <View syle={{ flex: 1 }}>
            <ScrollView>
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    avatar={{ uri: item.imageUrl }}
                    key={item.key}
                    title={item.title}
                    subtitleNumberOfLines={5}
                    subtitle={item.description}
                  />
                )}
              />
            </ScrollView>
          </View>
        )}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <ModalAddArticle />
        </View>
      </View>
    );
  }
}

export default ArticlesAll;
