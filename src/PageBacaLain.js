//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class PageBacaLain extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 25}}>
        <View
          style={{
            height: 510,
            width: WIDTH - 50,
            backgroundColor: '#E0E0E0',
            borderRadius: 10,
          }}>
          <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              {this.props.content}
            </Text>
          </View>
        </View>
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
export default PageBacaLain;
