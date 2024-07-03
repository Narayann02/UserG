import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Back from '../../assets/svg/Back.svg';
import Checkright from '../../assets/svg/Checkright.svg';
import {StyleGloble} from '../../helper/GlobleCss';
import Three from '../../assets/svg/Three.svg';
import Two from '../../assets/svg/Two.svg';
import MapHome from '../../assets/svg/MapHome.svg';
import Edit from '../../assets/svg/Edit.svg';
import Taskalt from '../../assets/svg/Taskalt.svg';
import LinearGradient from 'react-native-linear-gradient';
import PlusRed from '../../assets/svg/PlusRed.svg';
import {Header} from 'react-native/Libraries/NewAppScreen';

const ConfirmAddress = () => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Confirm Address'} />

      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent:'center',
          // justifyContent:'space-evenly',

          // alignItems:'flex-end',
          marginTop: 20,
          margin: 20,
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Checkright />
          </View>
          <View
            style={{borderBottomWidth: 1, borderColor: '#F66B6B', width: 94}}
          />
        </View>

        <Text
          style={{
            fontSize: 10,
            fontWeight: '400',
            color: '#BCBBBB',
            textAlign: 'center',
            textAlign: 'left',
            marginTop: 10,
          }}>
          Address
        </Text>

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Checkright />
          </View>
          <View
            style={{borderBottomWidth: 1, borderColor: '#F66B6B', width: 94}}
          />
        </View>

        <Text
          style={{
            fontSize: 10,
            fontWeight: '400',
            color: '#BCBBBB',
            textAlign: 'center',
            textAlign: 'left',
            marginTop: 10,
          }}>
          Address
        </Text>
        {/* <View style={{alignItems:'center'}}>
          <Two />
          <Text  style={{fontSize:10,fontWeight:'400',color:'#BCBBBB',textAlign:'center',}}>Order Summary</Text>
        </View>
        <View
          style={{borderBottomWidth: 1, borderColor: '#F66B6B', width: 94}}
        />

        <View style={{alignItems:'center'}}>
        <Three />
        <Text style={{fontSize:10,fontWeight:'400',color:'#BCBBBB',}}>Payment</Text>
        </View> */}
      </View>
      <View
        style={{
          borderColor: '#F65F6F',
          borderWidth: 1,
          height: 390,
          width: 330,
          backgroundColor: '#201F1F',
          alignSelf: 'center',
          borderRadius: 16,
          marginTop: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MapHome />
            <Text style={{fontSize: 15, fontWeight: '700', color: '#F65F6F'}}>
              Home
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Edit style={{right: 5}} />
            <Text
              style={{
                color: '#6EBAF1',
                fontSize: 15,
                fontWeight: '600',
                right: 5,
              }}>
              Edit
            </Text>
            <Taskalt />
          </View>
        </View>

        <View style={{...StyleGloble.paddingScreen, marginTop: 15}}>
          <View>
            <Text style={StyleGloble.fon13400FFF}>Name :</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>Darlene Robertson</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon13400FFF}>Phone Number :</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>(808) 555-0111</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon13400FFF}>Region</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>Riyadh</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon13400FFF}>City</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>Saudi arabia</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon13400FFF}>bulding number</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>13</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={StyleGloble.fon13400FFF}>Street</Text>
            <Text style={StyleGloble.fon15400BCBBBB}>
              King Abdulaziz Branch Road, Al Mursalat
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <PlusRed />
        <Text style={{fontSize: 16, fontWeight: '600', color: '#F65F6F'}}>
          Add New Address
        </Text>
      </View>

      <TouchableOpacity>
        <LinearGradient
          colors={['#F65F6F', '#F78164']}
          style={{
            borderRadius: 8,
            width: 330,
            height: 50,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#FFFFFF',
              textAlign: 'center',
              top: 13,
            }}>
            Continue
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmAddress;
