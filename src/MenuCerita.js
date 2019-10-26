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
  Animated,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageScroll from './ImageScroll';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class MenuCerita extends Component {
  constructor() {
    super();
    this.munculModal = new Animated.Value(1000);
  }
  state = {
    cerita: [
      {
        nama: 'Malin Kundang',
        daerah: 'Sumatera Barat',
        photo: require('../assets/malin.jpg'),
      },
      {
        nama: 'Asal-usul Tangkuban Perahu',
        daerah: 'Jawa Barat',
        photo: require('../assets/sangkuriang.jpg'),
      },
      {
        nama: 'Roro Jonggrang',
        daerah: 'Jawa Barat',
        photo: require('../assets/roro.jpg'),
      },
      {
        nama: 'Jaka Tarub',
        daerah: 'Jawa Timur',
        photo: require('../assets/tarub.jpg'),
      },
      {
        nama: 'Asal-usul Danau Toba',
        daerah: 'Sumatera Utara',
        photo: require('../assets/toba.jpg'),
      },
      {
        nama: 'Lutung Kasarung',
        daerah: 'Jawa Barat',
        photo: require('../assets/lutung.jpg'),
      },
    ],
    namaCerita: '',
    daerahCerita: '',
    photoCerita: '',
  };

  baca() {
    this.props.navigation.navigate('Baca');
    this.hide();
  }

  animasi() {
    this.props.navigation.navigate('Animasi');
    this.hide();
  }

  muncul(nama, daerah, photo) {
    this.setState({
      namaCerita: nama,
      daerahCerita: daerah,
      photoCerita: photo,
    });
    Animated.spring(this.munculModal, {
      toValue: HEIGHT - 500,
      friction: 6,
    }).start();
  }

  hide() {
    Animated.spring(this.munculModal, {
      toValue: 1000,
      friction: 10,
    }).start();
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
            <ScrollView horizontal={true}>
              <ImageScroll image={require('../assets/malin.jpg')} />
              <ImageScroll image={require('../assets/roro.jpg')} />
              <ImageScroll image={require('../assets/tarub.jpg')} />
              <ImageScroll image={require('../assets/sangkuriang.jpg')} />
            </ScrollView>
          </View>
        </View>
        <Animated.View
          style={{
            height: 300,
            width: WIDTH - 100,
            top: this.munculModal,
            left: WIDTH - 310,
            backgroundColor: '#E0E0E0',
            position: 'absolute',
            zIndex: 1,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={() => this.hide()}>
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: '#d63031',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                marginLeft: WIDTH - 135,
                marginTop: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 15}}>X</Text>
            </View>
          </TouchableOpacity>
          <View style={{alignItems: 'center', paddingTop: 5}}>
            <View
              style={{
                height: 120,
                width: WIDTH - 120,
              }}>
              <Image
                source={this.state.photoCerita}
                style={{flex: 1, width: null, height: null, borderRadius: 10}}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {this.state.namaCerita}
            </Text>
            <Text style={{color: '#828282'}}>{this.state.daerahCerita}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3C6382',
                borderRadius: 10,
              }}
              onPress={() => this.baca()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  width: 35,
                }}>
                Baca
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3C6382',
                borderRadius: 10,
              }}
              onPress={() => this.animasi()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  width: 55,
                }}>
                Animasi
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
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
                      onPress={() =>
                        this.muncul(
                          item.item.nama,
                          item.item.daerah,
                          item.item.photo,
                        )
                      }>
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
