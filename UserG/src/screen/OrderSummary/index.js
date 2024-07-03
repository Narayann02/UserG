import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
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
import ImagePath from '../../constant/ImagePath';
import OrderView from '../../assets/svg/OrderView.svg';
import Header from '../../helper/Header';

const OrderSummary = () => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Confirm Address'} />
      <View style={StyleGloble.paddingScreen}>
        <ScrollView style={{marginBottom: '10%'}}>
          <View style={{alignSelf: 'center', marginTop: 15}}>
            <Image
              style={{width: 285, height: 42}}
              source={ImagePath.summary}
            />
          </View>

          <View style={{marginTop: 15, marginLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#BCBCBC'}}>
              Deliver to:
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: 390,
              backgroundColor: '#201F1F',
              alignSelf: 'center',
              borderRadius: 16,
              marginTop: 15,
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
                <Text
                  style={{fontSize: 15, fontWeight: '700', color: '#F65F6F'}}>
                  Home
                </Text>
              </View>

              <Text
                style={{
                  color: '#6EBAF1',
                  fontSize: 15,
                  fontWeight: '600',
                  right: 5,
                }}>
                Change
              </Text>
            </View>

            <View style={{...StyleGloble.paddingScreen, marginTop: 15}}>
              <View>
                <Text style={StyleGloble.fon13400FFF}>Name :</Text>
                <Text style={StyleGloble.fon15400BCBBBB}>
                  Darlene Robertson
                </Text>
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
              backgroundColor: '#201F1F',
              height: 314,
              borderRadius: 12,
              marginTop: 30,
            }}>
            <View style={{marginLeft: 15, marginRight: 15}}>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#FFFFFF'}}>
                    Order Review
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '600', color: '#FFFFFF'}}>
                    2 items in card
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: '#373737',
                    borderBottomWidth: 1,
                    marginTop: 15,
                  }}></View>
                <OrderView />
              </View>
              <View
                style={{
                  borderBottomColor: '#373737',
                  borderBottomWidth: 1,
                  marginTop: 15,
                }}></View>

              {/* <View  style={{borderBottomWidth:1,borderBottomColor:'#373737',marginTop:10}}/> */}

              <View style={{marginTop: 20}}>
                <View>
                  <Image
                    style={{height: 90, width: 90}}
                    source={ImagePath.COD4}
                  />
                </View>

                <View style={{alignSelf: 'flex-end', top: -80}}>
                  <Text
                    style={{
                      color: '#F5F5F5',
                      fontSize: 16,
                      fontWeight: '700',
                      marginLeft: 10,
                    }}>
                    COD4 - Call of Duty 4 - Ps5
                  </Text>
                </View>

                <View style={{flexDirection: 'row', top: -70, left: 100}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      style={{
                        borderColor: '#B2BCCA',
                        borderWidth: 1,
                        height: 29,
                        width: 28,
                        borderRadius: 3,
                      }}>
                      <Text
                        style={{
                          color: '#D8D8D8',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>

                    <Text style={{color: '#F65F6F', left: 10}}>2</Text>

                    <TouchableOpacity
                      style={{
                        borderColor: '#B2BCCA',
                        borderWidth: 1,
                        height: 29,
                        width: 28,
                        borderRadius: 3,
                        left: 20,
                      }}>
                      <Text
                        style={{
                          color: '#D8D8D8',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft: 70}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#BCBBBB',
                      }}>
                      $245,78
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: '#F65F6F',
                      }}>
                      $245,78
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginTop: 0}}>
              <View>
                <Image
                  style={{height: 90, width: 90}}
                  source={ImagePath.COD4}
                />
              </View>

              <View style={{alignSelf: 'flex-end', top: -80}}>
                <Text
                  style={{
                    color: '#F5F5F5',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 0,
                  }}>
                  COD4 - Call of Duty 4 - Ps5
                </Text>
              </View>

              <View style={{flexDirection: 'row', top: -70, left: 100}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#B2BCCA',
                      borderWidth: 1,
                      height: 29,
                      width: 28,
                      borderRadius: 3,
                    }}>
                    <Text
                      style={{
                        color: '#D8D8D8',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>

                  <Text style={{color: '#F65F6F', left: 10}}>2</Text>

                  <TouchableOpacity
                    style={{
                      borderColor: '#B2BCCA',
                      borderWidth: 1,
                      height: 29,
                      width: 28,
                      borderRadius: 3,
                      left: 20,
                    }}>
                    <Text
                      style={{
                        color: '#D8D8D8',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginLeft: 70}}>
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: '#BCBBBB'}}>
                    $245,78
                  </Text>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#F65F6F'}}>
                    $245,78
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* </View> */}

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 314,
              borderRadius: 12,
              marginTop: 20,
            }}>
            <View style={{marginLeft: 15, marginRight: 15}}>
              <View style={{marginTop: 15}}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#FFFFFF'}}>
                  Discount Codes
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#FFFFFF'}}>
                  Enter your coupon code
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#373737',
                  borderBottomWidth: 1,
                  marginTop: 15,
                }}></View>
            </View>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderSummary;
