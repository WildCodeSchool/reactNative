import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
  Linking,
  ImageBackground,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import ModalAddArticle from './ModalAddArticle';
import fire from '../firebase/firebase';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
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
                  <View>
                    <Text style={{color:'white', fontStyle:'italic', fontSize: 15}}>
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
                      titleStyle={{ color: 'white' }}
                      subtitleStyle={{
                        color: 'white',
                        fontStyle: 'italic',
                        fontSize: 15,
                      }}
                    />
                  </View>
                )}
              />
            </ScrollView>
          )}
          <View>
            <ModalAddArticle uid={uid} name={name} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ArticlesAll;
