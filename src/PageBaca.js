//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class PageBaca extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 25}}>
        <ImageBackground
          source={this.props.gambar}
          style={{
            height: 510,
            width: WIDTH - 50,
            borderRadius: 10,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: this.props.color,
              }}>
              {this.props.content}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default PageBaca;
