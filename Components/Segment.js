import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { Text } from 'react-native';

const component1 = () => <Text>All articles</Text>;
const component2 = () => <Text>Articles to read</Text>;
const component3 = () => <Text>My articles</Text>;

class Segment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 },
    ];
    const { selectedIndex } = this.state;
    return (
      <ButtonGroup
        selectedIndex={selectedIndex}
        onPress={() => console.log('Hello')}
        buttons={buttons}
        containerStyle={{ height: 50 }}
      />
    );
  }
}

export default Segment;
