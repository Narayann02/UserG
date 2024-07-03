import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import CrossGrey from '../../assets/svg/CrossGrey.svg';
import Galleryadd from '../../assets/svg/Galleryadd.svg';
import Textfield from '../../helper/Textfield';
import Greydown from '../../assets/svg/Greydown.svg';
import Infocircle from '../../assets/svg/Infocircle.svg';
import Check from '../../assets/svg/Check';
import Uncheck from '../../assets/svg/Uncheck.svg';
import Button from '../../helper/Button';

const PostAd = () => {

  

   
  const [rememberme, setrememberme] = useState(false);
  const [shipping, setshipping] = useState(0);


  EditProfileFieldScreen = ({route})=>{
       // const [fieldValue, setFieldValue] = useState('abcde') // works correctly
       const [fieldValue, setFieldValue] = useState('abcdef') // does not work correctly
       console.log('initial length', fieldValue.length)
   
       const handleTextChange = (text) => {
           console.log('text change called', text.length)
           setFieldValue(text)
       }
  }

  const shippingfunc = id => {
    setshipping(id);
  };

  return (
    <View style={StyleGloble.ImageBackground}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Header type={5} />

        <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
          Post Ad
        </Text>
        <TouchableOpacity>
          <CrossGrey style={{marginRight: 20}} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={StyleGloble.paddingScreen}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#F65F6F',
              borderStyle: 'dashed',
              padding: 25,
              borderRadius: 12,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Galleryadd />

              <Text style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                Upload Cover Photo
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon16500FFFFFF}>Item Information</Text>
          </View>

          <TouchableOpacity style={{marginTop: 15}} >
            <Textfield name={'Item Name'} Placeholder={'Ex.'}  />
          </TouchableOpacity>

          <View style={{marginTop: 10}}>
            <Textfield name={'Price'} Placeholder={'Ex.'} />
          </View>
          <View style={{marginTop: 10}}>
            <Textfield name={'Current Location'} Placeholder={'Ex.'} />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon16500FFFFFF}>Shipping Information</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 10, width: '47%'}}>
              <Textfield name={'Quantity'} Placeholder={'Ex.'} />
            </View>

            <View style={{marginTop: 10, width: '47%'}}>
              <Textfield name={'Weight'} Placeholder={'Ex.'} />
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 10, width: '30%'}}>
              <Textfield name={'Quantity'} Placeholder={'Ex.'} />
            </View>

            <View style={{marginTop: 10, width: '30%'}}>
              <Textfield name={'Weight'} Placeholder={'Ex.'} />
            </View>

            <View style={{marginTop: 10, width: '30%'}}>
              <Textfield name={'Weight'} Placeholder={'Ex.'} />
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon16500FFFFFF}>Other Details</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
                Categories
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#797979',
                borderRadius: 8,
                height: 40,
                paddingLeft: 13,
                paddingRight: 13,
                marginTop: 8,
              }}>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#797979'}}>
                Choose Platform
              </Text>
              <Greydown />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10}}>
            <Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
                Platform
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#797979',
                borderRadius: 8,
                height: 40,
                paddingLeft: 13,
                paddingRight: 13,
                marginTop: 8,
              }}>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#797979'}}>
                Choose Platform
              </Text>
              <Greydown />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10}}>
            <Text>
              <Text style={{...styles.namesty}}>About</Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#797979',
                borderRadius: 8,
                height: 125,
                paddingLeft: 13,
                paddingRight: 13,
                marginTop: 8,
              }}>
              <TextInput
                placeholder="Ex."
                placeholderTextColor={'#797979'}
                style={{color: 'white'}}
                // value={fieldValue}
                // onChangeText={handleTextChange}
                maxLength={50}
                multiline={true}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#F65F6F',
              borderStyle: 'dashed',
              padding: 25,
              borderRadius: 12,
              marginTop: 15,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Galleryadd />

              <Text style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                Upload Cover Photo
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Infocircle />
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: '#828282',
                padding: 5,
              }}>
              Only you can add up to 8 photos
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setrememberme(!rememberme)}>
                {rememberme ? <Check /> : <Uncheck />}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: '#ffffff',
                  marginLeft: 10,
                }}>
                I agree with
              </Text>
              <TouchableOpacity style={{marginLeft: 5}}>
                <Text
                  style={{fontSize: 14, fontWeight: '300', color: '#F66B6B'}}>
                  Terms and Politics
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 8,
              height: 50,
              flexDirection: 'row',
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderWidth: 1,
              borderColor: shipping == 1 ? '#F66B6B' : '#797979',
              backgroundColor: '#201F1F',
              padding: 15,
              height: 50,
            }}
            onPress={() => shippingfunc(1)}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setrememberme(!rememberme)}>
                {shipping == 1 ? <Check /> : <Uncheck />}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: shipping == 1 ? '#FFFFFF' : '#797979"',
                  marginLeft: 10,
                }}>
                Hand to hand Delivery
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 8,
              height: 50,
              flexDirection: 'row',
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderWidth: 1,
              borderColor: shipping == 2 ? '#F66B6B' : '#797979',
              backgroundColor: '#201F1F',
              padding: 15,

              height: 50,
            }}
            onPress={() => shippingfunc(2)}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setrememberme(!rememberme)}>
                {shipping == 2 ? <Check /> : <Uncheck />}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: shipping == 2 ? '#FFFFFF' : '#797979"',
                  marginLeft: 10,
                }}>
                Send with Shipping company
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              borderTopWidth: 1,
              borderTopColor: '#373737',
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#F65F6F',
                borderRadius: 8,
                height: 50,
                justifyContent: 'center',
                width: '47%',
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#BCBBBB',
                  textAlign: 'center',
                }}>
                Save
              </Text>
            </TouchableOpacity>
            <View style={{width: '47%'}}>
              <Button
                label={'Post'}
                onPress={() => navigation.navigate('Validation')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  namesty: {
    fontSize: 14,
    fontWeight: '400',
    color: '#BCBBBB',
  },
});

export default PostAd;
