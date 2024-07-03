import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import Forgame from '../../assets/svg/Forgame.svg';
import Chevrondown from '../../assets/svg/Chevrondown.svg';
import ImagePath from '../../constant/ImagePath';
import Editalt from '../../assets/svg/Editalt.svg';
import Editalt2 from '../../assets/svg/Editalt2.svg';
import User from '../../assets/svg/User.svg';
import Email from '../../assets/svg/Email.svg';
import Mobile from '../../assets/svg/Mobile.svg';
import Maplocation from '../../assets/svg/Maplocation.svg';
import Globe from '../../assets/svg/Globe.svg';
import Currentlocation from '../../assets/svg/Currentlocation.svg';
import Location from '../../assets/svg/Location.svg';
import Bank from '../../assets/svg/Bank.svg';
import Postal from '../../assets/svg/Postal.svg';
import Lock from '../../assets/svg/Lock.svg';
import Redplus from '../../assets/svg/Redplus.svg';

const Avatardata = [
  {
    id: 1,
    image: ImagePath.Avatar,
  },
  {
    id: 2,
    image: ImagePath.Avatar2,
  },

  {
    id: 3,
    image: ImagePath.Avatar3,
  },
  {
    id: 4,
    image: ImagePath.Avatar3,
  },
  {
    id: 4,
    image: ImagePath.Avatar3,
  },
];

const Profile1 = ({navigation}) => {
  const [shipping,setshipping]= useState(0);
  const shippingfunc = (id)=> {
         setshipping(id)
 
     }
 
  return (
    <ScrollView>
      <View style={StyleGloble.ImageBackground}>
        <View style={StyleGloble.paddingScreen}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <TouchableOpacity>
              <Menu />
            </TouchableOpacity>

            <Text
              style={{
                ...StyleGloble.fon20700white,
                fontWeight: '600',
                marginLeft:105,
              }}>
              Profile
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <View style={{alignSelf: 'center'}}>
              <ImageBackground
                style={{height: 101, width: 101}}
                source={ImagePath.Redcircle}>
                <Image
                  style={{height: 87, width: 87, alignSelf: 'center', top: 7}}
                  source={ImagePath.Dummy}
                />

                <TouchableOpacity style={{alignItems: 'flex-end',top:-20,left:22}}>
                  <Editalt />
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#F65F6F',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              Sara.cruz
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#BCBBBB',
                alignSelf: 'center',
              }}>
              sara.cruz@example.com
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{...StyleGloble.fon16700FFFF, fontWeight: '600'}}>
              Personal informtion
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Editalt2 />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#F65F6F',
                  alignSelf: 'center',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 142,
              width: 330,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <User />
              <Text style={styles.namestyle}>Jenny Wilson</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Email />
              <Text style={styles.namestyle}>sara.cruz@example.com</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 15,
              }}>
              <Mobile />
              <Text style={styles.namestyle}>+966-504218617</Text>
            </View>
          </View>

          <TouchableOpacity style={{marginTop: 15}} onPress={()=>navigation.navigate('Profile')}>
            <View
              style={{
                borderColor: '#F65F6F' ,
                borderWidth: 1,
                padding: 15,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Redplus />

              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: '400',
                  marginLeft: 10,
                }}>
                Add Address
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text style={{...StyleGloble.fon16700FFFF, fontWeight: '600'}}>
              Privacy setting
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 78,
              width: 330,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 18,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Lock />
              <Text style={styles.namestyle}>**********</Text>
            </View>

            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#F65F6F',
                  marginRight: 15,
                }}>
                Change password
              </Text>
            </TouchableOpacity>
          </View>

          
          </View>
          <FlatList
          style={{marginTop:200}}
            data={Avatardata}
            horizontal={true}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (

                <ImageBackground
                style={{height:200,width:'auto',}}
                source={ImagePath.RedBlack}>
              <View style={{margin:10,}}>
                <Image style={{height: 100, width: 100,top:40}} source={item.image} />
              </View>
              </ImageBackground>
            )}
          />
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  namestyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#BCBBBB',
    marginLeft: 8,
  },
  contentstyle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#BCBBBB',
  },
  whiteFF: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});
export default Profile1;
