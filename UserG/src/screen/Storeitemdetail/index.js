import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import ImagePath from '../../constant/ImagePath';
import Header from '../../helper/Header';
import RedDoots from '../../assets/svg/RedDoots.svg';
import Cart from '../../assets/svg/Cart.svg';
import LinearGradient from 'react-native-linear-gradient';
import Yellowstar from '../../assets/svg/Yellowstar.svg';
import Whitestar from '../../assets/svg/Whitestar.svg';
import Favorite from '../../assets/svg/Favorite.svg';
import Share from '../../assets/svg/Share.svg';
import Chatting from '../../assets/svg/Chatting.svg';

const Storeitemdetail = ({navigation}) => {
  const [star, setstar] = useState(0);
  return (
    <View style={StyleGloble.ImageBackground}>
      <ImageBackground
        style={{height: 440, width: 428}}
        source={ImagePath.Ronaldo}>
        <Header type={5} name={'FIFA 2022'} />
      </ImageBackground>

      <View style={{marginTop: 15, alignSelf: 'center'}}>
        <RedDoots />
      </View>
      <ScrollView style={{marginBottom:'10%'}}>
        <View style={StyleGloble.paddingScreen}>
          <View
            style={{
              borderColor: '#373737',
              borderWidth: 1,
              borderRadius: 12,
              backgroundColor: '#201F1F',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 175, width: 109}}
                source={ImagePath.fifagroup}
              />
              <View style={{paddingTop:15,paddingLeft:15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: '#BCBBBB',
                      margin: 0,
                    }}>
                    FIFA 2022
                  </Text>
                  <TouchableOpacity>
                  <Favorite />
                  </TouchableOpacity>
     
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 16, width: 16}}
                    source={ImagePath.Store}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#6EBAF1',
                      textDecorationLine: 'underline',
                      left:3
                    }}>
                    Gamers Store
                  </Text>
                  <Image
                    style={{height: 12, width: 12,left:6}}
                    source={ImagePath.rightwhitblue}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop:3
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
                    Riyadh
                  </Text>
                  <TouchableOpacity>
                    <Share />
                  </TouchableOpacity>
                </View>


<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:180,marginTop:8}}>
                <View style={{}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    
                    <TouchableOpacity onPress={() => setstar(0)}>
                      {star== 0 ? <Whitestar /> : <Yellowstar />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setstar(1)}>
                      {star== 1 ? <Whitestar /> : <Yellowstar />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setstar(2)}>
                      {star== 2? <Whitestar /> : <Yellowstar />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setstar(3)}>
                      {star == 3 ? <Whitestar /> : <Yellowstar />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setstar(4)}>
                      {star == 4 ? <Whitestar /> : <Yellowstar />}
                    </TouchableOpacity>
                    
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '400',
                        color: '#BCBBBB',
                      }}>
                      4.0
                    </Text>
                  </View>
              
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#BCBBBB'}}>
                  Published July 22nd
                </Text>
                </View>

                <TouchableOpacity>
                  <Chatting />
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderColor: '#797979',
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              marginTop: 15,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#F66B6B'}}>
              Product Delivery Options
            </Text>

            <Image
              style={{height: 44, width: 204, top: 5}}
              source={ImagePath.Textframe}
            />
          </View>

          <View
            style={{
              borderColor: '#797979',
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              marginTop: 15,
            }}>
            <Text style={{fontSize: 18, fontWeight: '400', color: '#F66B6B'}}>
              About Game
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#797979',
                marginTop: 10,
                lineHeight: 19,
              }}>
              Powered by Football™, EA SPORTS™ FIFA 22 brings the game even
              closer to the real thing with fundamental gameplay advances and a
              new season of innovation across every mode
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#797979',
                marginTop: 10,
                lineHeight: 19,
              }}>
              Powered by Football™, EA SPORTS™ FIFA 22 brings the game even
              closer to the real thing with fundamental gameplay advances and a
              new season of innovation across every mode
            </Text>
          </View>
        </View>

        <View style={{borderWidth: 1, borderColor: '#201F1F', marginTop: 30}}>
          <View
            style={{
              ...StyleGloble.paddingScreen,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#F66B6B'}}>
                Price
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#F66B6B',
                  marginLeft: 5,
                }}>
                $55
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#909296',
                  marginLeft: 5,
                }}>
                tax Incl.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <TouchableOpacity style={{marginRight: 10}}>
                <Cart />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('My Cart')}>
                <LinearGradient
                  style={{
                    borderRadius: 8,
                    height: 50,
                    width: 110,
                    justifyContent: 'center',
                  }}
                  colors={['#F65F6F', '#F78164']}>
                  <Text
                    style={{
                      ...StyleGloble.fon16700FFFF,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Buy
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Storeitemdetail;
