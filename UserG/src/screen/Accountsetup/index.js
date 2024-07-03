import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import ImagePath from '../../constant/ImagePath';
import Textfield from '../../helper/Textfield';

const Accountsetup = ({navigation}) => {

const [showpicker,setshowpicker]=useState(false);

  return (
    <View style={StyleGloble.ImageBackground}>
      <View style={StyleGloble.paddingScreen}>
        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <Image
            style={{height: 120, width: 120}}
            source={ImagePath.Banklogo}
          />
        </View>

        <View>
          <Text style={{...StyleGloble.fon14500FFFFFF,marginTop:20}}>Select bank</Text>
          <View style={{marginTop:10}}>
            <Textfield Placeholder={'eg. GTCO Bank'} />
            </View>

            <Text style={{...StyleGloble.fon14500FFFFFF,marginTop:20}}>Account holder name</Text>
          <View style={{marginTop:10}}>
            <Textfield />
            </View>
            <Text style={{...StyleGloble.fon14500FFFFFF,marginTop:20}}>Account number</Text>
          <View style={{marginTop:10}}>
            <Textfield placeholder={'eg. GTCO Bank'} />
            </View>
            <Text style={{...StyleGloble.fon14500FFFFFF,marginTop:20}}>Account type</Text>
          <View style={{marginTop:10}}>
            <Textfield placeholder={'eg. GTCO Bank'} />
            </View>
        </View>




        <TouchableOpacity >
          <View style={{backgroundColor:'#0D56D9',borderRadius:50,padding:15,marginTop:60}}>
            <Text style={{color:'#FFFFFF',fontSize:16,fontWeight:'600',textAlign:'center'}}>Add Bank</Text>

          </View>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Accountsetup;
