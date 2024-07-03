import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menufield from '../../helper/Menufield';
import ImagePath from '../../constant/ImagePath';
import Button from '../../helper/Button';

const Contactus = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
  <Menufield  name={'Contact us'}/>

      <View style={StyleGloble.paddingScreen}>
        <View style={{alignSelf: 'center', marginTop: 40}}>
          <Image
            style={{height: 250, width: 250}}
            source={ImagePath.Contactimage}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#797979',
            borderRadius: 8,
            marginTop: 30,
          }}>
          <TextInput
            style={{marginLeft: 15, color: 'white'}}
            placeholder="Full name"
            placeholderTextColor={'#797979'}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#797979',
            borderRadius: 8,
            marginTop: 10,
          }}>
          <TextInput
            style={{marginLeft: 15, color: 'white'}}
            placeholder="Email Address"
            placeholderTextColor={'#797979'}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#797979',
            borderRadius: 8,
            marginTop: 10,
            height: 124,
          }}>
          <TextInput
            style={{marginLeft: 15, color: 'white'}}
            placeholder="Love to hear from you, Get in touch 👋🏻"
            placeholderTextColor={'#797979'}
          />
        </View>

        <View style={{marginTop: 25}}>
          <Button label={'Send'} />
        </View>
      </View>
    </View>
  );
};
export default Contactus;
