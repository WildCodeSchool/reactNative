import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image_container: {
    // marginRight: 10,
    marginTop: 50,
    marginBottom: 40,
    width: 250,
    height: 250,
  },
  button: {
    marginTop: 20,
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
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{
              uri:
                'https://i2.wp.com/www.freespirittours.net/wp-content/uploads/2018/03/article-icon.png',
            }}
            style={styles.image_container}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="S'identifier"
            onPress={() => history.push('/signup')}
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
