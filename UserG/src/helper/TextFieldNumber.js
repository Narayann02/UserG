import React, { useEffect, useRef, useState } from 'react'
import { Text, TextInput, StyleSheet, View, Animated, Easing, Image, TouchableWithoutFeedback } from 'react-native';


const TextFieldNumber = (props) => {

    const { label, errorText, value, style, type, onBlur, Placeholder, name, star, onFocus, ...restOfProps } = props
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)
    const focusAnim = useRef(new Animated.Value(0)).current
    let securetext = false;
    let keypadtype = 'default';
    let multilineobj = true;

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


    if (type == 'email') {
        securetext = false;
        keypadtype = 'email-address';
        multilineobj = false;
    }
    else if (type == 'phone') {
        securetext = false;
        keypadtype = 'phone-pad';
        multilineobj = false;
    }
    else if (type == 'number') {
        securetext = false;
        keypadtype = 'numeric';
        multilineobj = false;
    }
    else if (type == 'password') {
        securetext = true;
        keypadtype = 'default';
        multilineobj = false;
    }
    else {
        securetext = false;
        keypadtype = 'default';
        multilineobj = true;
    }

    return (
        <View style={{ position: "relative" }}>
            <View style={styles.input2}>

                <TextInput
                    style={{ marginLeft: 10, fontSize: 14, fontWeight: "400", color: "#797979" }}
                    ref={inputRef}
                    multiline={multilineobj}
                    placeholder={Placeholder}
                    placeholderTextColor="#A9A9AA"
                    keyboardType={'number-pad'}
                    {...restOfProps}
                    secureTextEntry={securetext}
                    value={value}
                    maxLength={10}
                    onBlur={(event) => {
                        setIsFocused(false)
                        onBlur?.(event)
                    }}
                    onFocus={(event) => {
                        setIsFocused(true)
                        onFocus?.(event)
                    }}
                    numberOfLines={1}
                />
            </View>
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    input2: {
      

        borderColor: "#797979",
        borderWidth: 1,

        borderRadius: 8,
        fontSize: 18,
        color: "#000000",
        flexDirection: "row",
        
    },
    input: {
        padding: 10,
        // backgroundColor: "#F5F5F5",
        borderColor: "#797979",
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 18,
        color: "#000000"
    },
    labelContainer: {
        position: 'absolute',

        top: -10,
        left: -15

    },
    borderview: {
        borderColor:  "#797979",
        borderWidth: 1,
    },
    label: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 12,
        color: "#323335"
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        // color: '#F4533A',
        
        fontFamily: 'Poppins-Regular',
    },
    newlable: {
        zIndex: 999,
        position: 'absolute',
        top: 16,
        left: 14
    },
})

export default TextFieldNumber;