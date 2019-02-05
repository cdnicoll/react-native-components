import React from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';

class PixelBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }


  _onPress = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    });
    console.log(!this.state.isToggled);
    this.props.onPress('poke!');
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor='white'>
        <Animated.View
          style={[this.state.isToggled ? styles.squareFilled : styles.square]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  squareFilled: {
    margin: 5,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default PixelBox;
