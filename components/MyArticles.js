import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
  Linking,
  ImageBackground,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import fire from '../firebase/firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
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
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/1e/72/5a/1e725a00b236422fd8210b9f083c2c53.jpg',
          }}
          style={{ width: '100%', height: '100%', borderColor: 'black' }}
        >
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
        </ImageBackground>
      </View>
    );
  }

export default MyArticles;
