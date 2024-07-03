import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleGloble } from "../../helper/GlobleCss";
import Cancel from '../../assets/svg/Cancel.svg';
import Successful from '../../assets/svg/Successful.svg';
import Arrowback from '../../assets/svg/Arrowback.svg';
import LineRed from '../../assets/svg/LineRed.svg';
import Pinkline from '../../assets/svg/Pinkline.svg';


const Success = ()=>{
    
    return(

<View style={StyleGloble.ImageBackground}>
<View style={StyleGloble.paddingScreen}>

<TouchableOpacity style={{marginTop:20,alignItems:'flex-end'}}>
<Cancel />
</TouchableOpacity>



<View style={{marginTop:20,alignSelf:'center'}}>
<Successful />
</View>

<Text style={{fontSize:24,fontWeight:'700',color:'#FFFFFF',textAlign:'center',marginTop:20}}>Congratulations! Your payment was successful.</Text>
<Text style={{fontSize:18,fontWeight:'200',color:'#BCBBBB',marginTop:20,lineHeight:20,width:260,alignSelf:'center'}}>Your order will be delivered soon.
Thank you for choosing our app!</Text>


<View style={{alignSelf:'center',marginTop:10}}>
<Pinkline />
</View>





<TouchableOpacity>
    <View style={{backgroundColor:'#373737',borderRadius:8,padding:15,marginTop:60}}>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',textAlign:'center'}}>See My Order</Text>
    </View>
</TouchableOpacity>



<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>


<TouchableOpacity style={{marginRight:8}}>
    <Arrowback />
</TouchableOpacity>


<View>


<Text style={{fontSize:18,fontWeight:'600',color:'#BCBBBB',textAlign:'center',marginLeft:8}}>Back to Home</Text>
</View>
</View>
</View>

</View>

    )

}

export default Success;