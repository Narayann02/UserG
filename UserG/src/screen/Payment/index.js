import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

import {StyleGloble} from '../../helper/GlobleCss';
import ImagePath from '../../constant/ImagePath';
import OrderView from '../../assets/svg/OrderView.svg';
import Header from '../../helper/Header';
import Dumble from '../../assets/svg/Dumble.svg';
import Check from '../../assets/svg/Check.svg';
import Uncheck from '../../assets/svg/Uncheck.svg';
import Button from '../../helper/Button';
import BhootImage from '../../assets/svg/BhootImage.svg';
import Header from '../../helper/Header';

const Payment = () => {

const [remember,setremember] = useState(false);

  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Payment'} />

      <ScrollView style={{marginBottom:30}}>

      <View style={StyleGloble.paddingScreen}>
        <View style={{alignSelf: 'center'}}>
          <Dumble />
        </View>

        <View
          style={{
            backgroundColor: '#201F1F',
            height: 460,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <View style={{marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#BCBCBC'}}>
                Payment Method
              </Text>
              <OrderView />
            </View>

            <View style={{marginTop:10}}>
              <Text style={{...styles.namestyle}}>Card number</Text>
              <View
                style={{
                  borderColor: '#B2BCCA',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop:10
                }}>
                <TextInput
                   style={{marginLeft:15}}
                  placeholder="1234 5678 9101 3456"
                  placeholderTextColor={'#BCBBBB'}
                />
              </View>
            </View>

            <View style={{ marginTop:10}}>
              <Text style={{...styles.namestyle}}>Zip/Postal Code</Text>
              <View
                style={{
                  borderColor: '#B2BCCA',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop:10
                }}>
                <TextInput
                style={{marginLeft:15}}
                  placeholder="MM/YY"
                  placeholderTextColor={'#BCBBBB'}
                />
              </View>
            </View>

            <View style={{marginTop:10}}>
              <Text style={{...styles.namestyle}}>Card Security Code</Text>
              <View
                style={{
                  borderColor: '#B2BCCA',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop:10
                }}>
                <TextInput
                   style={{marginLeft:15}}
                  placeholder="1234 5678 9101 3456"
                  placeholderTextColor={'#BCBBBB'}
                />
              </View>
         

            <View style={{ marginTop:20}}>
              <Text style={{color: '#6EBAF1', fontSize: 12, fontWeight: '400'}}>
                What is this?
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
                <OrderView />
                <Text style={{...styles.texrtsty,lineHeight:14,marginLeft:10}}>
                  We protect your payment information using encryption to
                  provide bank-level security.
                </Text>
              </View>
              </View>
            </View>
          </View>
        </View>


        <View
          style={{
            backgroundColor: '#201F1F',
            height: 440,
            borderRadius: 10,
            marginTop: 30,
          }}>
          <View style={{marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#BCBCBC'}}>
              Billing Summary
              </Text>
              <OrderView />
            </View>


<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

<Text style={{...styles.content}}>Subtotal</Text>
<Text style={{...styles.rupeesstyle}}>$200</Text>
</View>


<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={{...styles.content}}>Subtotal</Text>
<Text style={{...styles.rupeesstyle}}>$200</Text>
</View>



<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={styles.content}>Shipping</Text>
<Text style={{...styles.rupeesstyle}}>$200</Text>
</View>


<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={{...styles.content}}>Tax</Text>
<Text style={{...styles.rupeesstyle}}>$200</Text>
</View>


<View style={{borderBottomWidth:1,borderBottomColor:'#808080',marginTop:20}} />
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
  <Text style={{fontSize:16,fontWeight:'700',color:'#FFFFFF'}}>
  Total
  </Text>
  <Text style={{fontSize:16,fontWeight:'700',color:'#FFFFFF'}}>
  $173
  </Text>
</View>


<View style={{flexDirection:'row',marginTop:20}}>


<TouchableOpacity onPress={()=>setremember(!remember)}>
  {
    remember ? <Check /> : <Uncheck />
  }
</TouchableOpacity>

<Text style={{fontSize:12,fontWeight:'400',color:'#FFFFFF',left:10}}>Please check to acknowledge our<Text style={{fontSize:12,fontWeight:'400',color:'#F65F6F',alignItems:'center'}}> Privacy & Terms Policy</Text></Text>
</View>


<View style={{marginTop:20}}>
<Button label={'Continue'}/>
</View>
<View style={{alignSelf:'center',marginTop:20}}>
  <BhootImage />
</View>

</View> 

           

      
  
      </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  namestyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
  },
  texrtsty: {
    fontSize: 10,
    fontWeight: '400',
    color: '#BCBBBB',
  },
  content:{
    fontSize:14,
    fontWeight:'400',
    color:'#BCBBBB'
  },
  rupeesstyle:{
    color:'#BCBBBB',
    fontSize:16,
    fontWeight:'600',

  }
});
export default Payment;
