import React, { Component } from 'react';
import { Modal, View, Alert, TextInput } from 'react-native';
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
      .post('http://192.168.1.144:3004/articles', {
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
              <TextInput
                style={{
                  height: 40,
                  width: '80%',
                  borderColor: 'gray',
                  borderWidth: 1,
                  paddingLeft: 5,
                }}
                placeholder="Entrez ici l'URL de l'article"
                underlineColorAndroid="transparent"
                textContentType="URL"
                onChangeText={value => this.setState({ url: value })}
                value={url}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
              <Button
                onPress={() => {
                  this.addArticle();
                }}
                title="Ajouter"
              />
            </View>
          </View>
        </Modal>

        <Button
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
