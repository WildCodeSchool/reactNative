import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
  Linking,
  Text,
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
    this.ref = fire.auth().onAuthStateChanged(user => {
      if (user) {
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
              uid: user.uid,
              name: user.displayName,
            });
          })
          .catch(error => Alert.alert(error));
      }
    });
  }

  componentWillUnmount() {
    this.ref();
  }

  render() {
    const { loading, articles = [], uid, name } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {loading ? (
          <View style={styles.view}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView>
            <FlatList
              data={articles}
              renderItem={({ item }) => (
                <View>
                  <Text>
                    Ajouté par
                    {item.name}
                  </Text>
                  <ListItem
                    avatar={{ uri: item.imageUrl }}
                    key={item.key}
                    title={item.title}
                    subtitleNumberOfLines={5}
                    subtitle={item.description}
                    onPress={() => Linking.openURL(item.url)}
                  />
                </View>
              )}
            />
          </ScrollView>
        )}
        <View>
          <ModalAddArticle uid={uid} name={name} />
        </View>
      </View>
    );
  }
}

export default ArticlesAll;
