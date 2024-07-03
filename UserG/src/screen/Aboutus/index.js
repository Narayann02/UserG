import React from 'react';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import Forgame from '../../assets/svg/Forgame.svg';
import ImagePath from '../../constant/ImagePath';
import Menufield from '../../helper/Menufield';

const Aboutus = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'About us'}  />

      <ScrollView style={{marginBottom: 5}}>
        <View style={StyleGloble.paddingScreen}>
          <View
            style={{
              height: 665,
              width: 320,
              backgroundColor: '#201F1F',
              borderRadius: 16,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <View style={{alignSelf: 'center', marginTop: 15}}>
              <Image
                style={{width: 80, height: 99}}
                source={ImagePath.iPhone15}
              />
            </View>
            <View style={{marginLeft: 15, marginRight: 15}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#BCBBBB'}}>
                User G
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#808080',
                  lineHeight: 27,
                }}>
                We are the GG website, which is under the ownership of a good
                game for electronic marketing, a Saudi institution with full
                Saudi management. We specialize in marketing and promoting
                goods, products and information about others, whether an
                individual, an institution or a company, and the institution
                specializes in everything related to electronic games, whether
                It was devices, products, information or spare parts, and that
                the GG site allows the user, whether an individual, an
                institution or a company, to display his products by creating an
                advertisement on the site, and also allows the user, whether an
                individual, an organization or a company, to purchase any
                product that was advertised through Users in a manner that does
                not contravene the rules and policies of use of the site.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Aboutus;
