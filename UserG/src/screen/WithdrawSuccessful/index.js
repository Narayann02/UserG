import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Withdrawsucces from '../../assets/svg/Withdrawsucces.svg';
import {StyleGloble} from '../../helper/GlobleCss';
import Arrowback from '../../assets/svg/Arrowback.svg';

const WithdrawSuccessful = () => {
  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <View style={{...StyleGloble.paddingScreen}}>


        <View style={{marginTop:'30%'}}>
        <Withdrawsucces />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#A6A7AB',
            textAlign: 'center',
            marginTop:15
            
          }}>
          Your withdrawal request has been sent to the admin.Sit tight! We'll
          keep you updated once it's confirmed.
        </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:"50%",
          }}>
          <TouchableOpacity style={{marginRight: 8}}>
            <Arrowback />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#BCBBBB',
                textAlign: 'center',
                marginLeft: 8,
              }}>
              Back to Home
            </Text>
          </View> 
        </View>
      </View>
    </View>
  );
};
export default WithdrawSuccessful;
