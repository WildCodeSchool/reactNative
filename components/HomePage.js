import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image_container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    marginBottom: 40,
    width: 310,
    height: 300,
  },
  button_container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 25,
    justifyContent: 'space-between',
    marginBottom: 40,
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
      <View>
        <Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          }}
          style={styles.image_container}
        />
        <View style={styles.button_container}>
          <Button
            title="S'identifier"
            onPress={() => history.push('/signup')}
          />
          <Button title="S'inscrire" onPress={() => history.push('/signup')} />
        </View>
      </View>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomePage);
