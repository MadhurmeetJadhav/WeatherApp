import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

const Details = props => {
  const {name} = props.route.params;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'black', fontSize: 22}}>{value}</Text>
    </View>
  );
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
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={{fontSize: 45, color: 'black'}}>{name}</Text>
              <Text style={{fontSize: 30, color: 'gray'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{fontSize: 70, color: 'black'}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

        <View>
        <Text style={{fontSize: 22, color: 'black',marginBottom:20}}> Weather Details</Text>
            <View style={{width: deviceWidth - 70}}>
            <Data value={data['wind']['speed']} title="Wind" />
              <Data value={data['main']['pressure']} title="Pressure" />
              <Data value={`${data['main']['humidity']}%`} title="Humidity" />
              <Data value={data['visibility']} title="Visibility" />
            </View>
        </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;
