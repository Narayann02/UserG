import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Menu from '../../assets/svg/Menu.svg';
import {StyleGloble} from '../../helper/GlobleCss';
import Menufield from '../../helper/Menufield';
import ImagePath from '../../constant/ImagePath';
import Arrowback from '../../assets/svg/Arrowback.svg';

const Myfavorites = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My favorites'} />

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image style={{height: 312, width: 313}} source={ImagePath.GroupGame} />

        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: '#BCBBBB',
              textAlign: 'center',
            }}>
            No items in Favorits
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: '#BCBBBB',
              textAlign: 'center',
            }}>
            right now!
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40%',
        }}>
        <TouchableOpacity
          style={{marginRight: 5}}
          onPress={() => navigation.navigate('HomePage')}>
          <Arrowback />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#BCBBBB',
              textAlign: 'center',
              marginLeft: 5,
            }}>
            Back to Home
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Myfavorites;
