import React from "react";
import {} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Button from "../helper/Button";

const Drawer = createDrawerNavigator();










function HomeScreen({ navigation }) {
    return (
      <View style={{}}>
        <Button
        //   onPress={() => navigation.navigate('Notifications')}
        //   title="Go to notifications"

        label={'home'} 
        />

        <Text>Hello</Text>
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Button  label={Order}/>
      </View>
    );
  }





const DrawerStack = () =>{

    return(

        <NavigationContainer>

            <Drawer.Navigator  screenOptions={{ headerShown: false }}>
                <Drawer.Screen  name="HomeScreen" component={HomeScreen}/>


            </Drawer.Navigator>
           
        </NavigationContainer>

    )
}

export default DrawerStack;