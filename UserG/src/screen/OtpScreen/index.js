import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Back from '../../assets/svg/Back.svg';
import Game from '../../assets/svg/Game.svg';
import Timer from '../../assets/svg/Timer.svg';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../helper/Button';
import Header from '../../helper/Header';

const OtpScreen = ({navigation}) => {
  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <Header  type={5} name={'Verification code'}/>
      <View style={StyleGloble.paddingScreen}>
        
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Game />
        </View>

        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#BCBBBB',
              textAlign: 'center',
              lineHeight: 20,
              marginTop: 20,
            }}>
            Enter the OTP authentication code below
          </Text>
          </View>
          <OTPTextView
            // containerStyle={}
            containerStyle={StyleGloble.textInputContainer}
            textInputStyle={StyleGloble.roundedTextInput}
            inputCount={4}
          />
       

       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
    <Timer />
        <Text style={StyleGloble.fon16700FFFF}>60s</Text>
       </View>


       <View style={{marginTop:"20%"}}>
        <Button  label={'Continue'} onPress={()=>navigation.navigate("NewPassword")} />
       </View>

       <TouchableOpacity>
        <Text style={{fontSize:14,fontWeight:'300',color:'#F66B6B',textAlign:'center',marginTop:25}}>Resend the code again</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
};
export default OtpScreen;
