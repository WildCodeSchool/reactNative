import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
  Linking,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import fire from '../firebase/firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class MyArticles extends React.Component {
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
      fire
        .database()
        .ref('articles/')
        .orderByChild('uid')
        .equalTo(user.uid)
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
          });
        })
        .catch(error => Alert.alert(error));
    });
  }

  componentWillUnmount() {
    this.ref();
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
          <ScrollView>
            <FlatList
              data={articles}
              renderItem={({ item }) => (
                <ListItem
                  avatar={{ uri: item.imageUrl }}
                  key={item.key}
                  title={item.title}
                  subtitleNumberOfLines={5}
                  subtitle={item.description}
                  onPress={() => Linking.openURL(item.url)}
                />
              )}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
export default MyArticles;
