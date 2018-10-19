import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { Text, View } from 'react-native';

const component1 = () => <Text>All articles</Text>;
const component2 = () => <Text>Articles to read</Text>;
const component3 = () => <Text>My articles</Text>;

class Segment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
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
    let rendering;
    switch (selectedIndex) {
      case 0:
        rendering = 'hi 0';
        break;
      case 1:
        rendering = 'hi 1';
        break;
      case 2:
        rendering = 'hi 2';
        break;
      default:
        return null;
    }

    return (
      <View>
        <ButtonGroup
          selectedIndex={selectedIndex}
          onPress={this.updateIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
        <Text>{rendering}</Text>
      </View>
    );
  }
}

export default Segment;
