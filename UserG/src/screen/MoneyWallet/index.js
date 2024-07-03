import React from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import Telephone from '../../assets/svg/Telephone.svg';

import ImagePath from '../../constant/ImagePath';

const withdral = [
  {
    id: 1,
    image: ImagePath.GTCO,
    name: 'Guaranty Trust Bank',
    ammount: '3251',
  },
];

const MoneyWallet = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'My wallet'} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#9E949A',
            textAlign: 'center',
          }}>
          Amount
        </Text>
        <TextInput
          style={{fontSize: 50, fontWeight: '400', color: '#FFF7FB'}}
          placeholder="N0.00"
          placeholderTextColor={'#FFF7FB'}
        />

        <View style={{marginTop: 50}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#9E949A',
              textAlign: 'center',
            }}>
            N50,623.51
          </Text>

          <Text style={{fontSize: 16, fontWeight: '500', color: '#9E949A'}}>
            AVAILABLE BALANCE
          </Text>
        </View>
      </View>

      <View style={{...StyleGloble.paddingScreen, marginTop: '40%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Telephone />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFF7FB',
              padding: 5,
            }}>
            Withdraw Money To
          </Text>
        </View>

        <FlatList
          data={withdral}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <>
              <View
                style={{
                  backgroundColor: '#201F1F',
                  borderRadius: 12,
                  padding: 12,
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{height: 55, width: 55}} source={item.image} />
                  <View style={{padding: 10}}>
                    <Text style={StyleGloble.fon16500FFFFFF}>{item.name}</Text>
                    <Text
                      style={{
                        color: '#FFF7FB',
                        fontSize: 12,
                        fontWeight: '500',
                      }}>
                      {item.ammount}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
};
export default MoneyWallet;
