import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const App = () => (
//   <View style={styles.container}>
//     <Button title="Ajouter Un article" />
//     <Text>Openspec</Text>
//   </View>
// );

// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Ajouter Un article"
          onPress={() => Alert.alert('Touché')}
        />
        <Text>Openspec</Text>
      </View>
    );
  }
}

export default App;
