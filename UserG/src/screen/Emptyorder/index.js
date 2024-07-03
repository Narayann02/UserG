import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../constant/ImagePath';
import Menufield from '../../helper/Menufield';



const Emptyorder = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My Order'} />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F65F6F',
            width: 160,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            All Ads
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F66B6B',
            height: 38,
            width: 160,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Orders
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <Text style={StyleGloble.fon15600WidthBCBBBB}>In progress</Text>

        <TouchableOpacity>
          <LinearGradient
            style={{
              borderRadius: 8,
              height: 34,
              width: 112,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={['#F65F6F', '#F78164']}>
            <Text style={StyleGloble.fon15600WidthBCBBBB}>Completed</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={StyleGloble.fon15600WidthBCBBBB}>Canceled</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#373737',
          marginTop: 20,
        }}
      />

      <View style={{marginTop:40}}>
        <Image style={{height:278,width:221,alignSelf:'center'}}  source={ImagePath.Emptyimage}/>
      </View>

     
    </View>
  );
};


export default Emptyorder;
