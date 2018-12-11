import React, { Component } from 'react';
import { Modal, View, Alert, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class ModalAddArticle extends Component {
  state = {
    modalVisible: false,
    text: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible, text } = this.state;
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
              padding: 15,
            }}
          >
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
                onChangeText={value => this.setState({ text: value })}
                value={text}
              />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <Button
                onPress={() => {
                  this.setModalVisible(!modalVisible);
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
