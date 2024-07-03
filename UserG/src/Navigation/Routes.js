import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import LoginRegister from '../screen/LoginRegister';

import Login from '../screen/Login';
import Signup from '../screen/Signup';
import ForgetPassword from '../screen/ForgetPassword';
import OtpScreen from '../screen/OtpScreen';
import NewPassword from '../screen/NewPassword';
import VerifySuccesful from '../screen/VerifySuccesful';
import HomePage from '../screen/HomePage';
import MyOrder from '../screen/MyOrder';
import Myfavorites from '../screen/Myfavorites';
import MyCart from '../screen/MyCart';
import Myads from '../screen/Myads';
import NewPost from '../screen/NewPost';
import Mywallet from '../screen/Mywallet';
import Accountsetup from '../screen/Accountsetup';
import MoneyWallet from '../screen/MoneyWallet';
import Aboutus from '../screen/Aboutus';
import Contactus from '../screen/Contactus';

import TermsConditions from '../screen/TermsConditions';
import Profile1 from '../screen/Profile1';
import Profile from '../screen/Profile';
import Categories from '../screen/Categories';
import ActionCategory from '../screen/ActionCategory';
import Storeitemdetail from '../screen/Storeitemdetail';
import Message from '../screen/Message';
import Chat from '../screen/Chat';

import AdList from '../screen/AdList';
import PostAd from '../screen/PostAd';
import Emptyorder from '../screen/Emptyorder';
import Notification from '../screen/Notification';
import ordercompleted from '../screen/Ordercompleted';
import Ordercompleted from '../screen/Ordercompleted';



// import Profile from '../screen/Profile';
// import EditAd from '../screen/EditAd';

// import AddAddress from '../screen/AddAddress';
// import OrderSummary from '../screen/OrderSummary';
// import Payment from '../screen/Payment';
// import DrawerStack from './DrawerStack';

//

// import Orderdetails from '../screen/Orderdetails';
// import ConfirmAddress from '../screen/ConfirmAddress';
// import Success from '../screen/Success';
// import Order from '../screen/Order';
// import CompleteOrder from '../screen/CompleteOrder';

// import AdsDetail from '../screen/AdsDetail';

// import Myads2 from '../screen/myads2';
// import AdsProof from '../screen/AdsProof';
// import ordercanceled from '../screen/ordercanceled';
// import ordercompleted from '../screen/ordercompleted';

// import WithdrawSuccessful from '../screen/WithdrawSuccessful';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginRegister" component={LoginRegister} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="VerifySuccesful" component={VerifySuccesful} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="Myfavorites" component={Myfavorites} />
        <Stack.Screen name="My Cart" component={MyCart} />
        <Stack.Screen name="Myads" component={Myads} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="Mywallet" component={Mywallet} />
        <Stack.Screen name="Accountsetup" component={Accountsetup} />
        <Stack.Screen name="MoneyWallet" component={MoneyWallet} />

        <Stack.Screen name="Aboutus" component={Aboutus} />

        <Stack.Screen name="Contactus" component={Contactus} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Profile1" component={Profile1} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="ActionCategory" component={ActionCategory} />
        <Stack.Screen name="Storeitemdetail" component={Storeitemdetail} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="AdList" component={AdList} />
        <Stack.Screen name="PostAd" component={PostAd} />
        <Stack.Screen name="Emptyorder" component={Emptyorder} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Ordercompleted" component={Ordercompleted} />

        {/* <Stack.Screen name="EditAd" component={EditAd} />
   
  
       
    
        <Stack.Screen name="AddAddress" component={AddAddress} />
  
         <Stack.Screen name="DrawerStack" component={DrawerStack} />
 
 
        
       
     
        <Stack.Screen name="Orderdetails" component={Orderdetails} />
        <Stack.Screen name="ConfirmAddress" component={ConfirmAddress} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
       
     
        <Stack.Screen name="Aboutus" component={Aboutus} /> 
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="AdsDetail" component={AdsDetail} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
      
        <Stack.Screen name="Myads2" component={Myads2} />
        <Stack.Screen name="AdsProof" component={AdsProof} />
       
     
      
        <Stack.Screen name="WithdrawSuccessful" component={WithdrawSuccessful} />
      

       
        <Stack.Screen name="ordercanceled" component={ordercanceled} />
        <Stack.Screen name="Payment" component={Payment} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
