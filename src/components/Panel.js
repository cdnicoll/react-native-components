import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Animated,
} from 'react-native';

// https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/
class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      animation: new Animated.Value(),
    };
  }

  toggle() {
    // We set the initial and final value, in here we are using the limits
    // from the previous steps. If the component is expanded we set the
    // height to the minimal value, otherwise to the maximum value.
    // let initialValue = this.state.expanded
    //   ? this.state.maxHeight + this.state.minHeight
    //   : this.state.minHeight;
    // let finalValue = this.state.expanded
    //   ? this.state.minHeight
    //   : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
    //console.log("maxHeight:", event.nativeEvent.layout.height)
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
    //console.log("minHeight:", event.nativeEvent.layout.height)
  }

  render() {
    // let icon = this.icons.down;
    if (this.state.expanded) {
    //   icon = this.icons.up;
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        {/* Text shown */}
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        />
        {/* Content row */}
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default Panel;
