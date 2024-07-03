import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  return (
    <TouchableOpacity  onPress={props.onPress}>
      <LinearGradient style={{...styles.viewstyle}} colors={['#F65F6F', '#F78164']}>
        <Text style={{...styles.textstyle}}>{props.label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    borderRadius: 8,
    padding: 15,
    textAlign:'center',
    alignItems:'center'
  },
  textstyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Button;
