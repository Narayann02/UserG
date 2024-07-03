// import React from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
// import {StyleGloble} from '../../helper/GlobleCss';
// import Back from '../../assets/svg/Back.svg';

// const AdsDetail = () => {
//   return (
//     <View style={StyleGloble.ImageBackground}>
//       <View style={StyleGloble.paddingScreen}>
//         <View style={{flexDirection : 'row', alignItems : 'center',marginTop:20,}}>
//           <TouchableOpacity>
//             <Back />
//           </TouchableOpacity>

//           <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF',marginLeft:60}}>
//             Ads Detail
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AdsDetail;

import React from 'react';
import {
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
import Back from '../../assets/svg/Back.svg';
import Spiderman from '../../assets/svg/Spiderman.svg';
import RedDoots from '../../assets/svg/RedDoots.svg';
import Menufield from '../../helper/Menufield';

const AdsDetail = () => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'Ads Detail'} />
      <View style={StyleGloble.paddingScreen}>
        <View>
          <LinearGradient
            style={{
              borderWidth: 1,
              borderColor: '#201F1F',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 10,
              padding: 0,
            }}
            colors={['#222222', '#0F0F0F']}>
            <View style={{marginTop: 0}}>
              <View
                style={{flexDirection: 'row', marginLeft: 15, marginTop: 20}}>
                <Image
                  style={{height: 90, width: 90}}
                  source={ImagePath.Miles}
                />
                <View style={{marginLeft: 10}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{...styles.namedesign}}>
                      Marvel's Spider-Man: Miles Morales
                    </Text>
                    <Image
                      style={{height: 20, width: 20}}
                      source={ImagePath.editpencil}
                    />
                  </View>
                  <Text style={styles.psdesign}>PS4 - PS5</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.rupeedesign}>$55</Text>
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
            </View>

            <View style={{marginTop: 10, left: 15}}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFF'}}>
                Description
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '400',
                  color: '#BCBCBC',
                  lineHeight: 15,
                  width: 330,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Image
                style={{height: 179, width: 300, alignSelf: 'center'}}
                source={ImagePath.spiderman}
              />
            </View>
            <View style={{alignSelf: 'center', marginTop: 20}}>
              <RedDoots />
            </View>
          </LinearGradient>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            padding: 10,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: '#175CD3',
              textAlign: 'center',
            }}>
            SOLD
          </Text>
        </TouchableOpacity>
      </View>
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

export default AdsDetail;
