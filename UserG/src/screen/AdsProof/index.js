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
import OkPick from '../../assets/svg/OkPick.svg';
import Menufield from '../../helper/Menufield';

const carddata = [
  {
    id: 1,
    image: ImagePath.army,
    tittle: 'COD4 - Call of Duty 4 - Ps5',
    Qty: 'Qty (1)',
    heading: 'Buyer information',
    name: 'Name:',
    person: ' Wade Warren',
    address: 'Address:',
    place: '8502 Preston Rd. Inglewood, ',
    imagepic: ImagePath.delivery,
    pic: 'Pickup',
    status: 'Payment status',
    message: 'Talk to buyer',
    messageimage: ImagePath.Chat,
    senditem: 'Sent the item Confirmation',
    sendimage: ImagePath.iconpark,
  },

  {
    id: 2,
    image: ImagePath.Joker,
    tittle: 'Saints ROW',
    Qty: 'Qty (1)',
    heading: 'Buyer information',
    name: 'Name : ',
    person: ' Robert alleson',
    address: 'Address:',
    place: '8502 Preston Rd. Inglewood, ',
    imagepic: ImagePath.delivery,
    carbenimage: ImagePath.carbon,
    pic: 'Waiting for the bill of lading',
    downimage: ImagePath.download,
    status: 'Payment status',
    message: 'Talk to buyer',
    messageimage: ImagePath.Chat,
    senditem: 'Sent the item Confirmation',
    sendimage: ImagePath.iconpark,
  },
];

const AdsProof = () => {
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
          style={{marginBottom: '25%'}}
          data={[{name: 'abcd'}]}
          renderItem={({item}) => (
            <>
              <FlatList
                data={carddata}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#201F1F',
                      height: 464,
                      borderRadius: 10,
                      marginTop: 30,
                    }}>
                    <View
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        alignSelf: 'center',
                        paddingTop: 15,
                      }}>
                      <Image
                        style={{height: 120, width: 290}}
                        source={item.image}
                      />

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#505050',
                          borderRadius: 8,
                          height: 22,
                          width: 91,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontWeight: '400',
                            color: '#FFFFFF',
                            textAlign: 'center',
                            marginTop: 3,
                          }}>
                          Purchase order
                        </Text>
                      </TouchableOpacity>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#808080',
                          }}>
                          {item.tittle}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#808080',
                          }}>
                          {item.Qty}
                        </Text>
                      </View>

                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#FFFFFF',
                          }}>
                          {item.heading}
                        </Text>
                      </View>

                      <View style={{marginTop: 10, flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#FFFFFF',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#808080',
                          }}>
                          {item.person}
                        </Text>
                      </View>

                      <View style={{marginTop: 10, flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#FFFFFF',
                          }}>
                          {item.address}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#808080',
                          }}>
                          {item.place}
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#505050',
                          borderRadius: 8,
                          flexDirection: 'row',
                          width: 'auto',
                          justifyContent: 'center',
                          padding: 8,
                          marginTop: 10,
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{height: 16, width: 16, right: 2}}
                          source={item.carbenimage}
                        />

                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '700',
                            color: '#FFFFFF',
                            left: 2,
                          }}>
                          {item.pic}
                        </Text>
                        <Image
                          style={{height: 16, width: 16, left: 5}}
                          source={item.downimage}
                        />
                      </TouchableOpacity>

                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '700',
                            color: '#FFFFFF',
                          }}>
                          {item.status}
                        </Text>
                      </View>

                      <TouchableOpacity>
                        <View
                          style={{
                            backgroundColor: '#505050',
                            borderRadius: 56,
                            padding: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                          }}>
                          <OkPick />
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '700',
                              color: '#FFFFFF',
                              marginLeft: 5,
                            }}>
                            Paid
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            borderColor: '#FFFFFF',
                            borderWidth: 1,
                            backgroundColor: '#505050',
                            borderRadius: 8,
                            padding: 8,
                            flexDirection: 'row',
                          }}>
                          <Image
                            style={{height: 19, width: 19}}
                            source={item.messageimage}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: '#FFFFFF',
                              left: 2,
                            }}>
                            {item.message}
                          </Text>
                        </View>

                        <View
                          style={{
                            borderColor: '#FFFFFF',
                            borderWidth: 1,
                            backgroundColor: '#505050',
                            borderRadius: 8,
                            padding: 8,
                            flexDirection: 'row',
                          }}>
                          <Image
                            style={{height: 16, width: 16}}
                            source={item.sendimage}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: '#FFFFFF',
                              left: 3,
                            }}>
                            {item.senditem}
                          </Text>
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

export default AdsProof;
