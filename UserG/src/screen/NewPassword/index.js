import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Back from '../../assets/svg/Back.svg';
import Chair from '../../assets/svg/Chair.svg';
import Eyeclosed from '../../assets/svg/Eyeclosed.svg';

import RecoverFrame from '../../assets/svg/RecoverFrame.svg';

import Button from '../../helper/Button';
import Header from '../../helper/Header';
import PasswordTextfield from '../../helper/PasswordTextfield';
import TextFieldNumber from '../../helper/TextFieldNumber';

const NewPassword = ({navigation}) => {
  return (
    <View style={{...StyleGloble.ImageBackground}}>
    
        <Header type={5} name={'New Password'} />
        <View style={StyleGloble.paddingScreen}>
        <ScrollView style={{marginBottom: '70%'}}>
          <View style={{alignSelf: 'center', marginTop: 40}}>
            <Chair />
          </View>

          <View>
            <Text style={{...styles.textsize}}>
              The new password must be different from the old one in order for
              the account to be more secure
            </Text>
          </View>

          <View style={{marginTop: 0}}>
          <PasswordTextfield
          Placeholder={'Password'} 
          
          />
          </View>

          <View style={{marginTop: -10}}>
            <PasswordTextfield Placeholder={'Confirm Password'} />
          </View>

          <View style={{marginTop: 30}}>
            <Button
              label={'Continue'}
              onPress={() => navigation.navigate('VerifySuccesful')}
            />
          </View>
        </ScrollView>
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
    marginTop: 40,
  },
});
export default NewPassword;
