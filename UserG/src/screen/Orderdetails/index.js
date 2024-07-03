import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Back from '../../assets/svg/Back.svg';
import ForzaHorizon from '../../assets/svg/ForzaHorizon.svg';
import Star from '../../assets/svg/Star.svg';
import CallofDuty from '../../assets/svg/CallofDuty.svg';
import Gamepad from '../../assets/svg/Gamepad.svg';
import DeleteIcon from '../../assets/svg/DeleteIcon.svg';
import {StyleGloble} from '../../helper/GlobleCss';
import LinearGradient from 'react-native-linear-gradient';
import Diamond from '../../assets/svg/Diamond.svg';
import Card from '../../assets/svg/Card.svg';
import Wallet from '../../assets/svg/Wallet.svg';
import History from '../../assets/svg/History.svg';
import Locationcheck from '../../assets/svg/Locationcheck.svg';
import Header from '../../helper/Header';
const Orderdetails = () => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Order details'} />
      <ScrollView style={{marginBottom: '5%'}}>
        <View
          style={{
            backgroundColor: '#201F1F',
            height: 440,
            width: 330,
            borderRadius: 16,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <View style={{marginLeft: 15, marginRight: 15}}>
            <View style={{alignSelf: 'center', marginTop: 15}}>
              <CallofDuty />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Gamepad />

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#F5F5F5',
                    marginLeft: 5,
                  }}>
                  COD4 - Call of Duty 4 - Ps5
                </Text>
              </View>

              <Text style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                Quantity (1)
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <DeleteIcon />

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#6EBAF1',
                    textDecorationLine: 'underline',
                    left: 14,
                  }}>
                  Gamers Store
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#B0B0B0',
                    left: 18,
                    textAlign: 'center',
                  }}>
                  -
                </Text>
                <Star style={{left: 22}} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#F5F5F5',
                    left: 28,
                  }}>
                  3.5
                </Text>
              </View>

              <Text style={{fontSize: 16, fontWeight: '700', color: '#F65F6F'}}>
                $75
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#373737',
                marginTop: 20,
              }}
            />

            <View style={{alignSelf: 'center', marginTop: 20}}>
              <ForzaHorizon />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Gamepad />

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#F5F5F5',
                    marginLeft: 5,
                  }}>
                  COD4 - Call of Duty 4 - Ps5
                </Text>
              </View>

              <Text style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                Quantity (1)
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <DeleteIcon />

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#6EBAF1',
                    textDecorationLine: 'underline',
                    left: 14,
                  }}>
                  Gamers Store
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#B0B0B0',
                    left: 18,
                    textAlign: 'center',
                  }}>
                  -
                </Text>
                <Star style={{left: 22}} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#F5F5F5',
                    left: 28,
                  }}>
                  3.5
                </Text>
              </View>

              <Text style={{fontSize: 16, fontWeight: '700', color: '#F65F6F'}}>
                $75
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 25}}>
          <LinearGradient
            colors={['#F65F6F', '#F78164']}
            style={{
              height: 51,
              width: 330,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700', color: '#282828'}}>
                Order ID : A-22514
              </Text>
              <Text style={{fontSize: 14, fontWeight: '700', color: '#282828'}}>
                July 25, 2022
              </Text>
            </View>
          </LinearGradient>

          <View
            style={{
              borderColor: '#201F1F',
              borderWidth: 1,
              height: 685,
              width: 330,
              alignSelf: 'center',
            }}>
            <View style={{marginLeft: 15, marginRight: 15}}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  Name :
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  Darlene Robertson
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  Phone Number :
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  (808) 555-0111
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  Region
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  Riyadh
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  City
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  Saudi arabia
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  bulding number
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  13
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#F5F5F5'}}>
                  Street
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
                  King Abdulaziz Branch Road
                </Text>
              </View>

              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#373737',
                  top: 25,
                }}
              />

              <View
                style={{
                  marginTop: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Diamond />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#F5F5F5',
                    left: 5,
                  }}>
                  Order Discount:
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#808080',
                    left: 10,
                  }}>
                  10%, Personal promo code
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Locationcheck />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#F5F5F5',
                    left: 5,
                  }}>
                  Delivery method:
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#808080',
                    left: 10,
                  }}>
                  FedEx, 3 days, 15$
                </Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <History />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#F5F5F5',
                  }}>
                  Delivery time & date :
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#808080',
                  }}>
                  01 - 08 - 2022 / 11:00AM
                </Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Wallet />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#F5F5F5',
                    left: 5,
                  }}>
                  Payment method:
                </Text>
                <Card style={{marginLeft: 10}} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#F5F5F5',
                    left: 10,
                  }}>
                  **** **** **** 3947
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#F5F5F5'}}>
                  VAT :
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#808080',
                    left: 8,
                  }}>
                  $5
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 25,
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 22, fontWeight: '700', color: '#F5F5F5'}}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: '700',
                    color: '#F65F6F',
                    left: 10,
                  }}>
                  $175
                </Text>
              </View>

              <TouchableOpacity style={{marginTop: 25}}>
                <LinearGradient
                  colors={['#F65F6F', '#F78164']}
                  style={{
                    height: 50,
                    width: 172,
                    alignSelf: 'center',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#FFFFFF',
                      textAlign: 'center',
                    }}>
                    OK
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#373737',
            marginTop: 20,
          }}
        />

        <TouchableOpacity
          style={{
            borderColor: '#F65F6F',
            borderWidth: 1,
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#BCBBBB',
              textAlign: 'center',
            }}>
            Chat with Buyer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#3F6EE7',
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Confirm Receiving
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Orderdetails;
