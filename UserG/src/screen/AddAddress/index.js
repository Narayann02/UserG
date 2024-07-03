import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../helper/Header';
import Mapx from '../../assets/svg/Mapx.svg';
import {StyleGloble} from '../../helper/GlobleCss';
import Textfield from '../../helper/Textfield';
import Button from '../../helper/Button';

const AddAddress = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Confirm Address'} />

      <View style={StyleGloble.paddingScreen}>
        <View
          style={{backgroundColor: '#201F1F', height: 530, borderRadius: 16}}>
          <View style={StyleGloble.paddingScreen}>
            <TouchableOpacity style={{marginTop:10}}>
              <Mapx />
            </TouchableOpacity>
<View style={{marginTop:10}}>
<Textfield name={'Name'} Placeholder={'Name'} />
</View>


<View style={{marginTop:10}}>
<Textfield name={'Phone number'} Placeholder={'Phone number'} />
</View>

<View style={{marginTop:10}}>
<Textfield name={'Region'} Placeholder={'Region'} />
</View>

<View style={{marginTop:10}}>
<Textfield name={'City'} Placeholder={'City'} />
</View>

<View style={{marginTop:10}}>
<Textfield name={'Building number'} Placeholder={'Building number'} />
</View>

<View style={{marginTop:10}}>
<Textfield name={'Street'} Placeholder={'Street'} />
</View>
           
          </View>
<View style={{marginTop:70}}>
     <Button  label={'Save Address'} />
</View>
     
        </View>
      </View>
    </View>
  );
};

export default AddAddress;
