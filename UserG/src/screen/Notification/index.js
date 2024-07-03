import React from "react";
import {View,Text,Image} from 'react-native';
import { StyleGloble } from "../../helper/GlobleCss";
import Header from "../../helper/Header";
import ImagePath from "../../constant/ImagePath";



const Notification = ({navigation}) =>{
    return(
        <View style={StyleGloble.ImageBackground}>
            <Header  type={5} name={'Notification'}/>
            <View style={StyleGloble.paddingScreen}>

        

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:14,fontWeight:'500',color:'#FFFFFF'}}>Today</Text>
                <Text style={{fontSize:12,fontWeight:'400',color:'#BCBBBB'}}>15 Aug</Text>
            </View>


            <View style={{borderWidth:1,borderColor:'#373737',backgroundColor:'#201F1F',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:12,height:64,borderRadius:12,marginTop:15}}>
                <Image  style={{height:40,width:40}} source={ImagePath.Locationcheck} />
                <Text style={{fontSize:14,fontWeight:'500',color:'#F5F5F5'}}>Your order A-22514, delivered</Text>
                <Text style={{fontSize:10,fontWeight:'400',color:'#F66B6B'}}>Now</Text>
            </View>

            <View style={{borderWidth:1,borderColor:'#373737',backgroundColor:'#201F1F',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:12,height:64,borderRadius:12,marginTop:10}}>
                <Image  style={{height:40,width:40}} source={ImagePath.Locationcheck} />
                <Text style={{fontSize:14,fontWeight:'500',color:'#F5F5F5'}}>Your order A-22514, delivered</Text>
                <Text style={{fontSize:10,fontWeight:'400',color:'#BCBBBB'}}>2hr.</Text>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
                <Text style={{fontSize:14,fontWeight:'500',color:'#FFFFFF'}}>2 week</Text>
                <Text style={{fontSize:12,fontWeight:'400',color:'#BCBBBB'}}>28 Aug</Text>
            </View>


            <View style={{borderWidth:1,borderColor:'#373737',backgroundColor:'#201F1F',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:12,height:64,borderRadius:12,marginTop:15}}>
                <Image  style={{height:40,width:40}} source={ImagePath.Locationcheck} />
                <Text style={{fontSize:14,fontWeight:'500',color:'#F5F5F5'}}>Your order A-22514, delivered</Text>
                <Text style={{fontSize:10,fontWeight:'400',color:'#F66B6B'}}>Now</Text>
            </View>

            <View style={{borderWidth:1,borderColor:'#373737',backgroundColor:'#201F1F',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:12,height:64,borderRadius:12,marginTop:10}}>
                <Image  style={{height:40,width:40}} source={ImagePath.Locationcheck} />
                <Text style={{fontSize:14,fontWeight:'500',color:'#F5F5F5'}}>Your order A-22514, delivered</Text>
                <Text style={{fontSize:10,fontWeight:'400',color:'#BCBBBB'}}>2hr.</Text>
            </View>



            </View>





            
        </View>

    )
}
export default Notification;