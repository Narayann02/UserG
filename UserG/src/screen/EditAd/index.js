import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import ImagePath from '../../constant/ImagePath';
import RedCross from '../../assets/svg/RedCross.svg';
import TextfieldWithoutlabel from '../../helper/TextfieldWithoutlabel';
import Textfield from '../../helper/Textfield';
import Top from '../../assets/svg/Top.svg';
import Galleryadd from '../../assets/svg/Galleryadd.svg';
import Infocircle from '../../assets/svg/Infocircle.svg';
import Check from '../../assets/svg/Check.svg';
import Uncheck from '../../assets/svg/Uncheck.svg';
import Button from '../../helper/Button';

const dummydata = [
  {
    id: 1,
    image: ImagePath.spiderscreenshot1,
  },
  {
    id: 2,
    image: ImagePath.screenshot2,
  },
  {
    id: 3,
    image: ImagePath.screenshot3,
  },
  {
    id: 4,
    image: ImagePath.screenshot4,
  },
];

const EditAd = ({navigation}) => {
  const [rememberme, setrememberme] = useState(false);
  const [shipping, setshipping] = useState(0);

  const shippingfunc = id => {
    setshipping(id);
  };

  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Edit ad'} />

      <ScrollView>
        <View style={StyleGloble.paddingScreen}>
          <ImageBackground
            style={{
              height: 130,
              borderRadius: 5,
              width: 320,
              alignSelf: 'center',
            }}
            source={ImagePath.spiderman}>
            <TouchableOpacity style={{alignItems: 'flex-end', padding: 10}}>
              <RedCross />
            </TouchableOpacity>
          </ImageBackground>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF'}}>
              item information
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <Textfield Placeholder={'Ex'} name={'Item Name'} />
          </View>

          <View style={{marginTop: 10}}>
            <Textfield Placeholder={'Ex'} name={'Price'} />
          </View>

          <View style={{marginTop: 10}}>
            <Textfield Placeholder={'Ex'} name={'Current Location'} />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
              Other Details
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
              Platform
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#797979',
              borderRadius: 8,
              height: 40,
              paddingLeft: 13,
              paddingRight: 13,
            }}>
            <Text
              style={{
                color: '#797979',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}>
              Choose Platform
            </Text>
            <Top style={{alignSelf: 'center'}} />
          </TouchableOpacity>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
              Categories
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#797979',
              borderRadius: 8,
              height: 40,
              paddingLeft: 13,
              paddingRight: 13,
            }}>
            <Text
              style={{
                color: '#797979',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}>
              Categories
            </Text>
            <Top style={{alignSelf: 'center'}} />
          </TouchableOpacity>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
              About
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              height: 125,
              borderWidth: 1,
              borderColor: '#797979',
              borderRadius: 8,
            }}>
            <TextInput
              placeholder="agfhg"
              placeholderTextColor={'#797979'}
              style={{paddingLeft: 10}}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#F65F6F',
              borderStyle: 'dashed',
              padding: 25,
              borderRadius: 12,
              marginTop: 10,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Galleryadd />

              <Text style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                Upload Cover Photo
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
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

          <FlatList
            horizontal={true}
            data={dummydata}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <TouchableOpacity style={{margin: 10}}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 5}}
                  source={item.image}
                />
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{flexDirection: 'row'}}
              onPress={() => setrememberme(!rememberme)}>
              <TouchableOpacity>
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
                onPress={() => navigation.navigate('Categories', {type: 1})}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditAd;
