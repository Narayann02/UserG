import { NavigationContext } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, } from 'react-native';


const maincard = ({navigation})=>{

    return(

        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('CompleteOrder')}>

        </TouchableOpacity>


        </View>
    
    )
}
export default maincard;