import React, { Component } from 'react';
import { Modal, View, Alert, TextInput, ImageBackground } from 'react-native';
import { Button, Header } from 'react-native-elements';
import axios from 'axios';

class ModalAddArticle extends Component {
  state = {
    modalVisible: false,
    url: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  addArticle = () => {
    const { url } = this.state;
    const { uid, name } = this.props;
    axios
      .post('http://192.168.1.79:3004/articles', {
        url,
        uid,
        name,
      })
      .then(() => this.setState({ modalVisible: false }))
      .catch(error => error.response);
  };

  render() {
    const { modalVisible, url } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Header
              leftComponent={{
                icon: 'arrow-back',
                color: '#fff',
                onPress: () => this.setModalVisible(!modalVisible),
              }}
            />

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ImageBackground
                source={{
                  uri:
                    'https://i.pinimg.com/originals/1e/72/5a/1e725a00b236422fd8210b9f083c2c53.jpg',
                }}
                style={{ width: '100%', height: '100%' }}
              >
                <TextInput
                  style={{
                    height: 50,
                    width: '100%',
                    borderColor: 'gray',
                    borderWidth: 2,
                    paddingLeft: 5,
                    backgroundColor: 'black',
                    top: '40%',
                  }}
                  placeholder="Entrez ici l'URL de l'article"
                  underlineColorAndroid="transparent"
                  textContentType="URL"
                  onChangeText={value => this.setState({ url: value })}
                  value={url}
                />
              </ImageBackground>
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
              <Button
                buttonStyle={{
                  height: 50,
                }}
                onPress={() => {
                  this.addArticle();
                }}
                title="Ajouter"
              />
            </View>
          </View>
        </Modal>
        <Button
          buttonStyle={{
            height: 60,
          }}
          raised
          icon={{ name: 'add' }}
          title="Ajouter un article"
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
      </View>
    );
  }
}

export default ModalAddArticle;
