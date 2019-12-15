//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageScroll from './ImageScroll';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class MenuCerita extends Component {
  constructor() {
    super();
  }
  state = {
    cerita: [
      {
        nama: 'Malin Kundang',
        daerah: 'Sumatera Barat',
        photo: require('../assets/malin.jpg'),
        status: false,
      },
      {
        nama: 'Legenda Nyi Roro Kidul',
        daerah: 'Jawa Barat',
        photo: require('../assets/rorokidul.jpg'),
        status: true,
      },
      {
        nama: 'Roro Jonggrang',
        daerah: 'Jawa Barat',
        photo: require('../assets/roro.jpg'),
        status: false,
      },
      {
        nama: 'Jaka Tarub',
        daerah: 'Jawa Timur',
        photo: require('../assets/tarub.jpg'),
        status: false,
      },
      {
        nama: 'Asal-usul Danau Toba',
        daerah: 'Sumatera Utara',
        photo: require('../assets/toba.jpg'),
        status: false,
      },
      {
        nama: 'Lutung Kasarung',
        daerah: 'Jawa Barat',
        photo: require('../assets/lutung.jpg'),
        status: false,
      },
    ],
    namaCerita: '',
    daerahCerita: '',
    photoCerita: '',
  };

  baca(status) {
    if (status === true) {
      this.props.navigation.navigate('Baca');
    } else {
      ToastAndroid.show('Masih Dalam Pengembangan !', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '35%',
            width: WIDTH,
            backgroundColor: '#3C6382',
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            margin: 0,
            zIndex: 0,
          }}>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                width: 325,
              }}>
              Temukan berbagai cerita rakyat di sini !
            </Text>
          </View>
          <View style={{paddingTop: 30, paddingHorizontal: 20}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ImageScroll image={require('../assets/malin.jpg')} />
              <ImageScroll image={require('../assets/roro.jpg')} />
              <ImageScroll image={require('../assets/tarub.jpg')} />
              <ImageScroll image={require('../assets/sangkuriang.jpg')} />
            </ScrollView>
          </View>
        </View>
        <ScrollView>
          <View style={{paddingVertical: 20}}>
            <View style={{paddingHorizontal: 20}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#828282'}}>
                Ceritanono
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#828282',
                  paddingTop: 10,
                }}>
                Aplikasi yang berisi tentang semua cerita-cerita rakyat
                Indonesia. Temukan semua cerita rakyat Indonesia yang belum
                pernah kalian ketahui sebelumnya !
              </Text>
            </View>
            <View style={{paddingTop: 30, paddingHorizontal: 20}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#828282'}}>
                Daftar Cerita
              </Text>
              <FlatList
                style={{marginTop: 10}}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
                data={this.state.cerita}
                renderItem={item => {
                  return (
                    <TouchableHighlight
                      onPress={() => this.baca(item.item.status)}>
                      <View
                        style={{
                          width: WIDTH - 210,
                          height: 170,
                          backgroundColor: '#E0E0E0',
                          borderRadius: 20,
                          marginTop: 15,
                        }}>
                        <View
                          style={{alignItems: 'center', paddingVertical: 10}}>
                          <Image
                            source={item.item.photo}
                            style={{
                              width: WIDTH - 230,
                              height: 100,
                              borderRadius: 20,
                            }}
                          />
                        </View>
                        <View style={{paddingHorizontal: 10}}>
                          <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                            {item.item.nama}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: 'bold',
                              color: '#828282',
                            }}>
                            {item.item.daerah}
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
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
export default MenuCerita;
