import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ImagePath from '../../constant/ImagePath';
import {StyleGloble} from '../../helper/GlobleCss';

import LoginRegister from '../LoginRegister';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginRegister');
    }, 3000);
  }, []);

  return (
    <View style={StyleGloble.ImageBackground}>
      <View style={styles.imagestyle}>
        <Image style={{height: 286, width: 242}} source={ImagePath.UserG} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
