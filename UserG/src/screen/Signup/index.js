import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {StyleGloble} from '../../helper/GlobleCss';
import ImagePath from '../../constant/ImagePath';
import Button from '../../helper/Button';
import Back from '../../assets/svg/Back.svg';
import Eyeclosed from '../../assets/svg/Eyeclosed.svg';
import Checkbox from '../../assets/svg/Checkbox.svg';
import LinearGradient from 'react-native-linear-gradient';
import Forgaming from '../../assets/svg/Forgaming.svg';
import Apple from '../../assets/svg/Apple.svg';
import Googleg from '../../assets/svg/Googleg.svg';
import Check from '../../assets/svg/Check.svg';
import Unheck from '../../assets/svg/Uncheck.svg';
import PasswordTextfield from '../../helper/PasswordTextfield';
import Header from '../../helper/Header';
import Textfield from '../../helper/Textfield';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = ({navigation}) => {
  const [setected, setselected] = useState(false);
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [isvalid,setisvalid] = useState(true);

  const registerUser = () => {

    const userId = uuid.v4()
    firestore().collection('users').doc(userId).set({
      name:name,
      phonenumber:phonenumber,
      city:city,
      email,email,
      password,password,
      cpassword,cpassword,
      userId,userId,



    }).then(res=>{
      console.log('user created');
      navigation.navigate('Login');
      
    }).catch(error=>{
      console.log('error');
    })

   
  };
  

  const validate = () => {
    let isvalid = true;
    if (name == '') {
      isvalid = false;
    }
    if (phonenumber == '') {
      isvalid = false;
    }
    if (city == '') {
      isvalid = false;
    }
    if (email == '') {
      isvalid = false;
    }
    if (password == '') {
      isvalid = false;
    }
    if (cpassword == '') {
      isvalid = false;
    }
    if (cpassword !== password) {
      isvalid = false;
    }
  }
  

  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <ScrollView style={{marginBottom: '10%'}}>
        <Header type={5} />

        <View style={{...StyleGloble.paddingScreen}}>
          <View style={{alignSelf: 'center'}}>
            <Image style={{height: 150, width: 126}} source={ImagePath.Rest} />
          </View>

          <View>
            <Text style={{...StyleGloble.textheading, marginTop: 10}}>
              Registration
            </Text>
          </View>

          <View>
            <View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="Full Name"
                value={name}
                onChangeText={text => {
                  setName(text);
                }}

                // onChangeText={text => setname(text)}
                // value={name}
              />
            </View>

            <View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="Phone Number*"
                value={phonenumber}
                onChangeText={text => {
                  setPhonenumber(text);
                }}
              />
            </View>
            <View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="City (Optional)"
                value={city}
                onChangeText={text => {
                  setCity(text);
                }}
              />
            </View>
            <View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="Email Address (Optional)"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>

            {/* <View style={{marginTop: -10}}>
              <PasswordTextfield
                Placeholder={'Password'}
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
              /> */}

<View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="password"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}

                // onChangeText={text => setname(text)}
                // value={name}
              />
            </View>

            </View>
            {/* <View
              style={{
                marginTop: -10,
              }}>
              <PasswordTextfield
                Placeholder={'Confirm Password'}
                value={cpassword}
                onChangeText={text => {
                  setcpassword(text);
                }}
              />
            </View> */}
            <View>
                <View
              style={{
                ...styles.Box,
                marginTop: 20,
              }}>
              <TextInput
                style={styles.textinputstyle}
                placeholderTextColor={'#797979'}
                placeholder="confirm"
                value={cpassword}
                onChangeText={text => {
                  setcpassword(text);
                }}

                // onChangeText={text => setname(text)}
                // value={name}
              />
            </View>


            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => setselected(!setected)}>
                {setected ? <Check /> : <Unheck />}
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: '#FFFFFF',
                  left: 10,
                }}>
                I agree with
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#F67B65',
                    left: 12,
                  }}>
                  Terms and Politics
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <Button
                label={'Register'}  onPress={()=>navigation.navigate('Login')}/>
               
            
              
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View style={styles.border} />
              <Text style={{fontSize: 12, fontWeight: '400', color: '#5F5F5F'}}>
                or continue with
              </Text>

              <View style={styles.border} />
            </View>

            <TouchableOpacity style={styles.blackbox}>
              <View style={{marginRight: 5}}>
                <Googleg />
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#FFFFFF',
                  left: 5,
                }}>
                Sign in with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.blackbox}>
              <View style={{marginRight: 5}}>
                <Apple />
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#FFFFFF',
                  left: 5,
                }}>
                Sign in with Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 8,
  },
  textinputstyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  starcss: {
    fontSize: 14,
    fontWeight: '400',
    color: '#CD605F',
  },
  border: {
    borderBottomColor: '#5F5F5F',
    borderBottomWidth: 1,
    width: 100,
  },
  blackbox: {
    backgroundColor: '#201F1F',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
export default Signup;
