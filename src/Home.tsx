import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
const Home = (props) => {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/image7.jpg'),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/main.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{
          opacity: 0.7,
          backgroundColor: 'white',
        }}
      />
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="black" />
          <Image
            source={require('../assets/images/user.jpg')}
            style={{
              height: 46,
              width: 46,
              borderRadius: 50,
            }}
          />
        </View>

        <View style={{marginTop: 100, marginHorizontal: 20}}>
          <Text style={{fontSize: 40, color: 'black', fontWeight: '700'}}>
            Hello User
          </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '900'}}>
            Search the city by the name
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 50,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor={'black'}
              style={{fontSize: 17, fontWeight: '600'}}
            />
            <TouchableOpacity onPress={()=> props.navigation.navigate('Details',{name:city})}>

              <Icon name="search" size={25} color={'black'} />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 160}}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginHorizontal: 20,
                marginBottom: 20,
                paddingHorizontal: 10,
              }}>
              My Locations
            </Text>
            <FlatList
              horizontal
              data={cities}
              renderItem={({item}) => (
                <Cards name={item.name} image={item.image} navigation={props.navigation}/>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
