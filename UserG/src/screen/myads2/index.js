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
    order: 'Cancel Order',
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

const Myads2 = () => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My Ads'} />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F65F6F',
            width: 160,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            All Ads
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F66B6B',
            height: 38,
            width: 160,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Orders
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <Text style={StyleGloble.fon15600WidthBCBBBB}>In progress</Text>
        <Text style={StyleGloble.fon15600WidthBCBBBB}>Completed</Text>
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
            <Text style={StyleGloble.fon15600WidthBCBBBB}>Canceled</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#373737',
          marginTop: 20,
        }}
      />

      <View style={StyleGloble.paddingScreen}>
        <FlatList
          style={{marginBottom: '40%'}}
          data={[{name: 'abcd'}]}
          renderItem={({item}) => (
            <>
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
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#F5F5F5',
                        }}>
                        Order ID : A-22514
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#F5F5F5',
                        }}>
                        July 25, 2022
                      </Text>
                    </View>

                    <View style={{marginTop: 15}}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#201F1F',
                          borderRadius: 16,
                          padding: 6,
                          backgroundColor: '#0F0F0F',
                        }}>
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
                              <Text style={styles.quantitydesign}>
                                {item.quantity}
                              </Text>

                              <Text style={styles.rupeedesign}>
                                {item.rupees}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              borderBottomWidth: 1,
                              borderBottomColor: '#373737',
                              marginTop: 10,
                            }}
                          />

                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '500',
                              color: '#909090',
                              top: 5,
                            }}>
                            {item.order}
                          </Text>
                        </LinearGradient>

                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#909090',
                            top: 5,
                          }}>
                          Customer:
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                          }}>
                          <Image
                            style={{width: 29.69, height: 32}}
                            source={ImagePath.OmarNoaman}
                          />

                          <View style={{}}>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: '#FFFFFF',
                              }}>
                              Omar Noaman
                            </Text>
                            <Text
                              style={{
                                fontSize: 10,
                                fontWeight: '300',
                                color: '#BCBBBB',
                              }}>
                              2 hr
                            </Text>
                          </View>

                          <View>
                            <TouchableOpacity
                              style={{
                                borderColor: '#F65F6F',
                                borderRadius: 8,
                                borderWidth: 1,
                                justifyContent: 'center',
                                padding: 10,
                                marginTop: -15,
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: '400',
                                  color: '#F65F6F',
                                }}>
                                Proof of Transaction
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 80,
                }}>
                <Text
                  style={{color: '#909090', fontSize: 16, fontWeight: '500'}}>
                  Rate our service
                </Text>
                <Text
                  style={{color: '#F66B6B', fontSize: 20, fontWeight: '500'}}>
                  Give Rating
                </Text>
              </View>
            </>
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

export default Myads2;
