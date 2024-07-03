import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import ImagePath from '../../constant/ImagePath';
import Button from '../../helper/Button';

const LoginRegister = ({navigation}) => {
  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <View style={{...StyleGloble.container}}>
        <View style={{...StyleGloble.paddingScreen}}>
          <View
            style={{
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Image style={{height: 286, width: 242}} source={ImagePath.UserG} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#F66B6B'}}>
              Welcome Back:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#FFFFFF',
                marginLeft: 5,
              }}>
              Access Your Gaming Haven
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Button
              label={'Login'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{marginTop: 18}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#F65F6F',
                borderRadius: 8,
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#F66B6B',
                  textAlign: 'center',
                }}>
                Register
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginRegister;
