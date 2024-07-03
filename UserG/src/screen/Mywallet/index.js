import React, { useState } from 'react';
import {
  ActivityIndicator,
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
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../constant/ImagePath';
import Button from '../../helper/Button';
import Menufield from '../../helper/Menufield';

const walletdata = [
  {
    id: 1,
    name: 'Money Added',
    rupees: '78************123',
    money: '+$500',
  },
  {
    id: 2,
    name: 'Money Deducted ',
    rupees: '78************123',
    money: '-$500',
  },
  {
    id: 3,
    name: 'Money Added',
    rupees: '78************123',
    money: '+$50',
  },
  {
    id: 4,
    name: 'Money Added',
    rupees: '78************123',
    money: '+$500',
  },

  {
    id: 5,
    name: 'Money Added',
    rupees: '78************123',
    money: '+$500',
  },
];

const Mywallet = ({navigation}) => {
  const [loading,setloading]=useState(false);
  return (
   

   
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My Ads'} />

      <View style={StyleGloble.paddingScreen}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#373737',
            padding: 15,
            backgroundColor: '#201F1F',
            borderRadius: 16,
            marginTop: 20,
          }}>
          <Image
            style={{height: 147, width: 164, alignSelf: 'center'}}
            source={ImagePath.Profit}
          />

          <Text
            style={{
              ...StyleGloble.fon20700white,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Your Profit
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 32, fontWeight: '700', color: '#F65F6F'}}>
              150
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#F65F6F',
                left: 5,
              }}>
              SAR
            </Text>
          </View>

          <TouchableOpacity style={{marginTop: 20}}>
            <Button label={'Submit Profit Request'} />
          </TouchableOpacity>


       
      

          <TouchableOpacity 
            onPress={() => navigation.navigate('MoneyWallet')} 
            style={{
              borderWidth: 1,
              borderColor: '#F66B6B',
              borderRadius: 8,
              padding: 15,
              marginTop: 15,
            }}>
            <Text
              style={{
                color: '#FFF7FB',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Withdraw
            </Text>
          </TouchableOpacity>
           
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#FFFFFF'}}>
            History
          </Text>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 50,
              height: 27,
              width: 88,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '700', color: '#3275E9'}}>
              Add Bank
            </Text>
          </View>
        </View>

        <FlatList
          style={{paddingBottom: '20%'}}
          data={[{name: 'efgh'}]}
          renderItem={({item}) => (
            <>
              <FlatList
                style={{marginTop: 20}}
                data={walletdata}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#201F1F',
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#FFFFFF',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#8E9092',
                          }}>
                          {item.rupees}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '500',
                          color: '#12B76A',
                        }}>
                        {item.money}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </>
          )}
        />
        
      </View>

      
    </View>
    
  );
};
export default Mywallet;
