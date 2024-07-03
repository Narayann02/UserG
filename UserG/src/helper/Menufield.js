import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Menu from '../assets/svg/Menu.svg';

const Menufield = props => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',paddingLeft:30,marginTop:20}}>
      <TouchableOpacity>
        <Menu />
      </TouchableOpacity>
      <View style={{}}>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#FFFFFF',alignItems:'center',paddingLeft:100}}>{props.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyl: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Menufield;
