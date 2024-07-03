import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ALLRight from '../../assets/svg/ALLRight.svg';
import Redline from '../../assets/svg/Redline.svg';
import {StyleGloble} from '../../helper/GlobleCss';

const VerifySuccesful = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <View style={StyleGloble.paddingScreen}>
        <View style={{alignSelf: 'center', marginTop: '20%'}}>
          <ALLRight />
        </View>

        <View style={{marginTop: 20}}>
          <Text
            style={{
              ...StyleGloble.fon20700white,
              fontSize: 24,
              width: 260,
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            Welcome aboard!
          </Text>
          <Text
            style={{
              ...StyleGloble.fon20700white,
              fontSize: 24,
              width: 260,
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            Let the gaming begin!
          </Text>
        </View>
        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <Redline />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  otp: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default VerifySuccesful;
