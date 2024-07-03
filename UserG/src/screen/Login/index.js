import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
} from 'react-native';
// import auth from '@react-native-firebase/auth';
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
const Login = ({navigation}) => {
  const [setected, setselected] = useState(false);
  const [inputemail, setInputemail] = useState({
    value: null,
    message: '',
    isValid: false,
  });
  const [inputpassword, setInputPassword] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  const [email, setEmail] = useState('');

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = email => {
    return emailReg.test(String(email).toLowerCase());
  };
  const validateemail = _in => {
    try {
      setInputemail(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (!isValidEmail(_in)) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter a valid Email ',
        }));
      } else if (_in.length === 0) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else {
        setInputemail(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
  };

  const Loginuser = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(res => {
        // console.log(JSON.stringify(res.docs));

        if(res.docs !== 0) {
          navigation.navigate('HomePage');
          console.log(JSON.stringify(res.docs[0].data()));
        } else {
          Alert.alert('user not found');
        }
      })
      .catch(error => {
        console.log(error)
        Alert.alert('not found');
      });
  };



  const validatePassword = _in => {
    try {
      setInputPassword(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputPassword(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter password',
        }));
      } else if (_in.length < 6) {
        setInputPassword(prev => ({
          ...prev,
          isValid: true,
          message:
            'that it must contain at least one lower case letter e.g. a, b, c, d etc.',
        }));
      } else {
        setInputPassword(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
  };

  return (
    <View style={{...StyleGloble.ImageBackground}}>
      <Header type={5} />

      <View style={{...StyleGloble.paddingScreen}}>
        <ScrollView style={{marginBottom: '30%'}}>
          <View style={{alignSelf: 'center'}}>
            <Image style={{height: 150, width: 126}} source={ImagePath.Rest} />
          </View>

          <View>
            <Text style={{...StyleGloble.textheading, marginTop: 10}}>
              Login
            </Text>
          </View>

          <View>
            <Textfield
              Placeholder="Enter email *"
              value={email}
              sectext="false"
              type="text"
              // errorText={inputemail.message}
              onChangeText={text => setEmail(text)}
            />

            <View style={{marginTop: -10}}>
              <PasswordTextfield
                Placeholder={'Password'}
                value={inputpassword.value}
                type="text"
                sectext="false"
                errorText={inputpassword.message}
                onChangeText={text => {
                  validatePassword(text);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
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
                  Remember me
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#F67B65',
                    marginTop: 10,
                  }}>
                  Forgot the password?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 50}}>
              <Button label={'Login'} onPress={() =>navigation.navigate('HomePage')} />
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

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
                Don’t have an Account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#F66B6B'}}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
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
export default Login;

// import React, { useState } from 'react';
// import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

// const Login = () => {
//   // State to manage focus, value, and validation errors
//   const [inputState, setInputState] = useState({
//     input1: { value: '', focused: false, error: false },
//     input2: { value: '', focused: false, error: false },
//     input3: { value: '', focused: false, error: false },
//   });

//   // Handlers for focus, blur, and change events
//   const handleFocus = (input) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], focused: true } });
//   };

//   const handleBlur = (input) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], focused: false } });
//     validateInput(input);
//   };

//   const handleChange = (input, value) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], value, error: false } });
//   };

//   // Validate input values
//   const validateInput = (input) => {
//     if (inputState[input].value.trim() === '') {
//       setInputState({ ...inputState, [input]: { ...inputState[input], error: true } ,});
//     } else {
//       setInputState({ ...inputState, [input]: { ...inputState[input], error: false } });
//     }
//   };

//   // Validate all inputs on form submission
//   const handleSubmit = () => {
//     Object.keys(inputState).forEach((input) => validateInput(input));
//   };

//   return (
//     <View style={styles.container}>
//       {Object.keys(inputState).map((input) => (
//         <TextInput
//           key={input}
//           style={[
//             styles.input,
//             {
//               borderColor: inputState[input].error
//                 ? 'red'
//                 : inputState[input].focused
//                 ? 'blue'
//                 : 'gray',
//             },
//           ]}
//           value={inputState[input].value}
//           onFocus={() => handleFocus(input)}
//           onBlur={() => handleBlur(input)}
//           onChangeText={(value) => handleChange(input, value)}
//         />
//       ))}
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default Login;

//error message with textinput

// import React, { useState } from 'react';
// import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

// const Login = () => {
//   // State to manage focus, value, and validation errors
//   const [inputState, setInputState] = useState({
//     input1: { value: '', focused: false, error: false, errorMessage: '' },
//     input2: { value: '', focused: false, error: false, errorMessage: '' },
//     input3: { value: '', focused: false, error: false, errorMessage: '' },
//   });

//   // Handlers for focus, blur, and change events
//   const handleFocus = (input) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], focused: true } });
//   };

//   const handleBlur = (input) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], focused: false } });
//     validateInput(input);
//   };

//   const handleChange = (input, value) => {
//     setInputState({ ...inputState, [input]: { ...inputState[input], value, error: false, errorMessage: '' } });
//   };

//   // Validate input values
//   const validateInput = (input) => {
//     if (inputState[input].value.trim() === '') {
//       setInputState({ ...inputState, [input]: { ...inputState[input], error: true, errorMessage: 'Please enter name' } });
//     } else {
//       setInputState({ ...inputState, [input]: { ...inputState[input], error: false, errorMessage: 'Please Correct Name' } });
//     }
//   };

//   // Validate all inputs on form submission
//   const handleSubmit = () => {
//     Object.keys(inputState).forEach((input) => validateInput(input));
//   };

//   return (
//     <View style={styles.container}>
//       {Object.keys(inputState).map((input) => (
//         <View key={input} style={styles.inputContainer}>
//           <TextInput
//             style={[
//               styles.input,
//               {
//                 borderColor: inputState[input].error
//                   ? 'red'
//                   : inputState[input].focused
//                   ? 'blue'
//                   : 'gray',
//               },
//             ]}
//             value={inputState[input].value}
//             onFocus={() => handleFocus(input)}
//             onBlur={() => handleBlur(input)}
//             onChangeText={(value) => handleChange(input, value)}
//           />
//           {inputState[input].error && (
//             <Text style={styles.errorText}>{inputState[input].errorMessage}</Text>
//           )}
//         </View>
//       ))}
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     paddingHorizontal: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 5,
//   },
// });

// export default Login;



