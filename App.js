/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from './src/MainRouter';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Container />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
