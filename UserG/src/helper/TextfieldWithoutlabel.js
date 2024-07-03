import React, { useEffect, useRef, useState } from 'react'
import { Text,TextInput,StyleSheet,View,Animated,Easing,Image, TouchableWithoutFeedback} from 'react-native'



const TextfieldWithoutlabel= (props) => {  
    return (
        <View style={{position:"relative"}}>
            <TextInput
                style={styles.input2}
           
           
                // keyboardType={keypadtype}
                placeholder={''}
                placeholderTextColor="#6D6D6D"
                // type={type}
           
                // secureTextEntry={securetext}
          
             
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input2:{

        fontSize: 16,
        color:"#000000",
        paddingLeft:15,
        height:40
    },
    labelContainer: {
        position: 'absolute',
      
        top:-10,
        left:-15

    },
    borderview:{
        borderColor:"#CC0076",
        borderWidth:1,
    },
    label: {
        fontSize: 14,
        fontWeight:'500',
        marginBottom:8,
        color:"#252525"
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 14,
        color: '#B00020',
        fontFamily:'Poppins-Regular',
    },
    newlable:{
        zIndex:999,
        position:'absolute',
        top:16,
        left:14
    },
})

export default TextfieldWithoutlabel