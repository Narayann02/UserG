import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../constant/ImagePath';
import Plus from '../../assets/svg/Plus.svg';
import Menufield from '../../helper/Menufield';

const orderdata = [
  {
    id: 1,
    image: ImagePath.Miles,
    name: "Marvel's Spider-Man: Miles Morales",
    imageEdit: ImagePath.editpencil,
    ps: 'PS4  - PS5',
    rupees: '$55',
    imageD: ImagePath.delete,
    order: 'Order Canceled',
  },
  {
    id: 2,
    image: ImagePath.Miles,
    name: "Marvel's Spider-Man: Miles Morales",
    imageEdit: ImagePath.editpencil,
    ps: 'PS4  - PS5',
    rupees: '$55',
    imageD: ImagePath.delete,
    order: 'Order Canceled',
  },
];

const Myads = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My ads'} />

      <View style={StyleGloble.paddingScreen}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 40,

            alignSelf: 'center',
          }}>
          <TouchableOpacity>
            <LinearGradient
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                height: 38,
                width: 152,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={['#F65F6F', '#F78164']}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                All Ads
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#F65F6F',
              width: 166,
              marginTop: 20,
              top: -5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#BCBBBB',
                textAlign: 'center',
                top: -8,
              }}>
              Orders
            </Text>
          </View>
        </View>

        <FlatList
          data={orderdata}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View>
              <View style={{marginTop: 20}}>
                <LinearGradient
                  style={{
                    borderWidth: 1,
                    borderColor: '#201F1F',
                    padding: 8,
                    borderRadius: 8,
                  }}
                  colors={['#222222', '#0F0F0F']}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 92, width: 92}}
                      source={item.image}
                    />
                    <View style={{marginLeft: 10}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.namedesign}}>{item.name}</Text>
                        <Image
                          style={{height: 20, width: 20}}
                          source={ImagePath.editpencil}
                        />
                      </View>
                      <Text style={styles.psdesign}>{item.ps}</Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.rupeedesign}>{item.rupees}</Text>
                        <TouchableOpacity
                          style={{
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{height: 20, width: 20}}
                            source={ImagePath.delete}
                          />
                        </TouchableOpacity>
                      </View>

                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '400',
                          color: '#269AFF',
                          lineHeight: 13,
                        }}>
                        Your ads will Expired in 48hrs of posting.
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          )}
        />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('PostAd')}>
        <LinearGradient
          style={{
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 215,
            height: 50,
            alignSelf: 'center',
            marginTop: '60%',
          }}
          colors={['#F65F6F', '#F78164']}>
          <Plus />
          <Text style={{fontSize: 16, fontWeight: '600', color: '#FFFFFF'}}>
            Post Ad
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  namedesign: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    width: 182,
    lineHeight: 21,
  },

  psdesign: {
    fontSize: 12,
    fontWeight: '400',
    color: '#797979',
  },
  rupeedesign: {
    color: '#F65F6F',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Myads;
