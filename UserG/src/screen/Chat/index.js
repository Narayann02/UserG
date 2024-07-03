import React from "react";
import {View,Image} from 'react-native';

import { StyleGloble } from "../../helper/GlobleCss";

import Header from "../../helper/Header";
import ImagePath from "../../constant/ImagePath";
import Menufield from "../../helper/Menufield";



const Chat = ({navigation})=>{
    return(

        <View style={StyleGloble.ImageBackground}>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

           
<Header  type={5}/>

<Image style={{width:106,height:81}} source={ImagePath.storegame}/>

<Image  style={{height:32,width:32,marginRight:20}} source={ImagePath.circle}/>


</View>



      




        </View>

    )
}

export default Chat;