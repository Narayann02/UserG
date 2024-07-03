import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Back from '../assets/svg/Back.svg';
import {useNavigation} from '@react-navigation/native';
import {StylesGloble} from './GlobleCss';
// import Filter from '../assets/svg/Filter.svg';
// import Notification from '../assets/svg/Notification.svg';
// import Threedot from '../assets/svg/Threedot.svg';
// import Setting from '../assets/svg/Setting.svg';
// import Donation from '../assets/svg/Donation.svg';

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <>
      {props.type == 1 ? (
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
      ) : props.type == 2 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={props.onPress}>
            <Text style={{...StylesGloble.font14500black}}>Skip</Text>
          </TouchableOpacity>
        </View>
      ) : props.type == 3 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        
        }}>
          <TouchableOpacity>
            <Filter />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('Notification')}>
            <Notification />
          </TouchableOpacity>
        </View>
      ) : props.type == 4 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Filter />
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#FFFFFF'}}>
              {props.name}
            </Text>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('Notification')}>
            <Notification />
          </TouchableOpacity>
        </View>
      ) : props.type == 5 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <View style={{alignSelf: 'center',}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#FFFFFF'}}>
              {props.name}
            </Text>
          </View>
          <View>
            <Text> </Text>
          </View>
        </View>
      ) : props.type == 6 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={props.submit}>
            <Threedot />
          </TouchableOpacity>
        </View>
      ) : props.type == 7 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('Settings')}>
            <Setting />
          </TouchableOpacity>
        </View>
      ) : props.type == 8 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('DonationScreen')}>
            <Donation />
          </TouchableOpacity>
        </View>
      ) : props.type == 9 ? (
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
              {props.name}
            </Text>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('DonationScreen')}>
            <Donation />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default Header;
