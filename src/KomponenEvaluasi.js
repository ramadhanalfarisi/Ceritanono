//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

// create a component
class KomponenEvaluasi extends Component {
  componentWillUnmount() {
    this.props.navigation.navigate('Baca');
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/background/paragraf7.jpg')}
        style={styles.container}>
        <View
          style={{
            height: 300,
            width: 250,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'times',
            }}>
            Score Kamu
          </Text>
          <Text
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'times',
            }}>
            {this.props.navigation.state.params.score}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'times',
            }}>
            Tetap Semangat Ya !
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 170,
    alignItems: 'center',
  },
});

//make this component available to the app
export default KomponenEvaluasi;
