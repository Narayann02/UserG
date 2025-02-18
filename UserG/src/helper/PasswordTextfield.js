import React, { useEffect, useRef, useState } from 'react'
import { Text, TextInput, StyleSheet, View, Animated, Easing, Image, TouchableOpacity } from 'react-native';
import Eye from '../assets/svg/Eye.svg';
import Eyeclosed from '../assets/svg/Eyeclosed.svg';



const PasswordTextfield = (props) => {

    const { label, errorText, value, style, type, onBlur,name, Placeholder, onFocus, ...restOfProps } = props
    const [isFocused, setIsFocused] = useState(false);
    const [securetext, setsecuretext] = useState(true);

    const inputRef = useRef(null)
    const focusAnim = useRef(new Animated.Value(0)).current

    let keypadtype = 'default';
    let multilineobj = false;
    useEffect(() => {

        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start()
    }, [focusAnim, isFocused, value])

    let color = '#B9C4CA'
    if (errorText) {
        color = '#B00020'
    }

    const checkvalue = (text)=>{
        if(text==''){
            return false;
        } else if(text==null){
            return false;
        } else if(text==undefined){
            return false;
        }else{
            return true;
        }
    }
    return (
        <View style={{ position: "relative" }} >
            <Text style={styles.label}>{name}</Text>
            <TextInput
                style={[checkvalue(value)==true?styles.input2 :styles.input]}
                ref={inputRef}
                multiline={multilineobj}
                keyboardType={keypadtype}
                placeholder={Placeholder}
                placeholderTextColor="#817878"
                
                type={type}
                {...restOfProps}
                secureTextEntry={securetext}
                value={value}
                onBlur={(event) => {
                    setIsFocused(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setIsFocused(true)
                    onFocus?.(event)
                }}
            />
            <View style={{ position: "absolute", top: 42, right: 15 }}>
                <TouchableOpacity onPress={() => {
                    if (securetext == true) {
                        setsecuretext(false)
                    } else {
                        setsecuretext(true)
                    }
                }} style={{ zIndex: 999999 }} >
                    {
                        securetext ?   <Eyeclosed /> :<Eye/>
                    }
                </TouchableOpacity>
            </View>
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    input2:{

       
        height:50,
        paddingLeft:15,
        borderColor:"#797979",
        borderWidth:1,
        borderRadius:8,
        fontSize: 14,
        color:"#797979",
        fontWeight:'400'

    },
    input: {
        height:50,
        paddingLeft:15,
        
        borderColor:"#797979",
        borderWidth:1,
        borderRadius:8,
        fontSize: 16,
        color:"#797979",
        fontWeight:'400'
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
        marginBottom:10,
        color:"#FFF7FB"
    },
    error: {
        marginTop: 4,
        fontSize: 14,
        color: '#E22AAC',
        fontFamily:'Poppins-Regular',
    },
    
    newlable:{

        zIndex:999,
        position:'absolute',
        top:16,
        left:14
    },
})

export default PasswordTextfield;