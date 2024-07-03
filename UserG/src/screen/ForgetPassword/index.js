import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Back from '../../assets/svg/Back.svg';

import RecoverFrame from '../../assets/svg/RecoverFrame.svg';

import Button from '../../helper/Button';
import Header from '../../helper/Header';
import TextFieldNumber from '../../helper/TextFieldNumber';

const ForgetPassword = ({navigation}) => {
  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <Header type={5} name={'Recover Password'} />

      <View style={StyleGloble.paddingScreen}>
        <View style={{alignSelf: 'center', marginTop: 25}}>
          <RecoverFrame />
        </View>

        <View>
          <Text style={{...styles.textsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Text>
        </View>

        <View style={{marginTop:20}}>
         <TextFieldNumber
         Placeholder={'Phone'}
         />
        </View>

        <View style={{marginTop: 25}}>
          <Button
            label={'Continue'}
            onPress={() => navigation.navigate('OtpScreen')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textsize: {
    color: '#BCBBBB',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 20.46,
    marginTop: 30,
  },
});
export default ForgetPassword;
