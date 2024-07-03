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
import Menufield from '../../helper/Menufield';

const orderdata = [
  {
    id: 1,
    image: ImagePath.PlayStation,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Order Canceled',
  },
  {
    id: 2,
    image: ImagePath.CallDuty,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Order Canceled',
  },
  {
    id: 3,
    image: ImagePath.ForzaHorizon,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Order Canceled',
  },
];

const CompleteOrder = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My Order'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <Text style={StyleGloble.fon15600WidthBCBBBB}>In progress</Text>

        <TouchableOpacity>
          <LinearGradient
            style={{
              borderRadius: 8,
              height: 34,
              width: 112,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={['#F65F6F', '#F78164']}>
            <Text style={StyleGloble.fon15600WidthBCBBBB}>Completed</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={StyleGloble.fon15600WidthBCBBBB}>Canceled</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#373737',
          marginTop: 20,
        }}
      />

      <View style={StyleGloble.paddingScreen}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#F5F5F5'}}>
            
            Order ID : A-22514
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#F5F5F5'}}>
            July 25, 2022
          </Text>
        </View> */}

        <FlatList
          data={orderdata}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 40,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '400', color: '#F5F5F5'}}>
                  Order ID : A-22514
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: '400', color: '#F5F5F5'}}>
                  July 25, 2022
                </Text>
              </View>

              <View style={{marginTop: 15}}>
                <LinearGradient
                  style={{
                    borderWidth: 1,
                    borderColor: '#201F1F',
                    padding: 12,
                    borderRadius: 8,
                  }}
                  colors={['#222222', '#0F0F0F']}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 75, width: 73}}
                      source={item.image}
                    />
                    <View style={{marginLeft: 20}}>
                      <Text style={styles.namedesign}>{item.name}</Text>
                      <Text style={styles.quantitydesign}>{item.quantity}</Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.rupeedesign}>{item.rupees}</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#12B76A10',
                            borderRadius: 50,
                            height: 24,
                            width: 120,
                            left: 5,
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '600',
                              color: '#12B76A',
                              textAlign: 'center',
                              top: 3,
                            }}>
                            {item.order}
                          </Text>
                          <Image
                            style={{
                              height: 12,
                              width: 12,
                              alignSelf: 'center',
                              left: 5,
                            }}
                            source={ImagePath.tick}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namedesign: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },

  quantitydesign: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  rupeedesign: {
    color: '#F65F6F',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CompleteOrder;
