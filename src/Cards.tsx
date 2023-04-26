import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimension';

export default function Cards({name, image, navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10, elevation: 8}} onPress={()=>navigation.navigate('Details',{name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 20}}
      />
      <View style={{position:'absolute',height:'100%',width:'100%'}}>

      <Text style={{ fontSize:22, color:'black', fontWeight:'900',height:'100%',width:'100%',textAlign:'center',textAlignVertical:'top'}}>
        {name}
      </Text>
      </View>
    </TouchableOpacity>
  );
}
