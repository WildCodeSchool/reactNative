import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image_container: {
    backgroundColor: 'black',
    marginTop: 70,
    marginBottom: 40,
    width: 250,
    height: 250,
  },
  button: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#B9B9B9',
  },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{
              uri:
                'http://partageetsignature.p.a.pic.centerblog.net/709ea002.gif',
            }}
            style={styles.image_container}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            buttonStyle={styles.button}
            title="S'identifier"
            onPress={() => history.push('/signin')}
          />
          <Button
            buttonStyle={styles.button}
            title="S'inscrire"
            onPress={() => history.push('/signup')}
          />
        </View>
      </View>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomePage);
