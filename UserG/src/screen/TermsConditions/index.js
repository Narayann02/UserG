import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import Forgame from '../../assets/svg/Forgame.svg';
import Chevrondown from '../../assets/svg/Chevrondown.svg';
import Menufield from '../../helper/Menufield';

const TermsConditions = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
   
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop:20}}>
         
          <Menufield />
        

          <Text
            style={{
              ...StyleGloble.fon20700white,
              fontWeight: '600',
              marginLeft: 75,
            }}>
            Terms & Conditions
          </Text>
        </View>
<View style={StyleGloble.paddingScreen}>
<TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            Terms of use
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>



        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            About us
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>



        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            Terms and Conditions of Use
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            Our Responsibility
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            User registration conditions 
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            Prohibited goods
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB'}}>
            The security policy of (GG)
            </Text>
            
            <Chevrondown/>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#373737',width:320,marginTop:20,alignSelf:'center'}}/>
        </TouchableOpacity>
        </View>
      </View>

  );
};
export default TermsConditions;
