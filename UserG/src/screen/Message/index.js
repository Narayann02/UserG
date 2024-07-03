import React from 'react';
import {FlatList, TouchableOpacity, Image, View,Text} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import ImagePath from '../../constant/ImagePath';


const Messagedata = [
  {
    id: 1,
    image: ImagePath.GamersStore,
    name: 'Gamers Store',
    time:'9:40 AM',
    heading: "That's great, What type of product are you...",
  },
  {
    id: 2,
    image: ImagePath.pic1,
    name: 'Name',
    time:'9:40 AM',
    heading: "That's great, What type of product are you...",
  },
  {
    id: 3,
    image: ImagePath.pic2,
    name: 'Name',
    time:'9:40 AM',
    heading: "That's great, What type of product are you...",
  },
  {
    id: 4,
    image: ImagePath.pic3,
    name: 'Name',
    time:'9:40 AM',
    heading: "That's great, What type of product are you...",
  },
];

const Message = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Message'} />
    
        <FlatList
          data={Messagedata}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <>
              <View style={StyleGloble.paddingScreen}>
            <TouchableOpacity style={{flexDirection:'row',marginTop:12}} onPress={()=>navigation.navigate('Chat')}>
              <Image style={{height: 60, width: 60}} source={item.image} />
              <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                
              <Text style={{fontSize:18,fontWeight:'500',color:'#FFFFFF'}}>{item.name}</Text>
              <Text style={{fontSize:12,fontWeight:'400',color:'#EBEBF560',lineHeight:15}}>{item.time}</Text>
              </View>
              <Text style={{fontSize:14,fontWeight:'400',color:'#EBEBF560',lineHeight:15,width:240}}>{item.heading}</Text>
              </View>
            
            </TouchableOpacity>

            </View>
            <View  style={{borderBottomColor:'#373737',borderBottomWidth:1,marginTop:15}}/>
            </>
            
          )}
        />
    
    </View>
  );
};
export default Message;
