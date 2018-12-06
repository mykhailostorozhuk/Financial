import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Onboard from "./src/screens/onboard/Onboard";

import Login from "./src/screens/signin/Login";

import Signup from "./src/screens/signup/Signup";
import UserInfor from "./src/screens/information/UserInfor";
import PinEnter from "./src/screens/pin/PinEnter";

import Main from "./src/screens/main/Main";

import SendMoney from "./src/screens/sendmoney/SendMoney";
import SendMoney1 from "./src/screens/sendmoney/SendMoney1";
import Success from "./src/screens/success/Success";

import CashIn from "./src/screens/cashin/CashIn";

import Settings from "./src/screens/profile/Settings";
import Contacts from "./src/screens/profile/Contacts";
import ChangePin from "./src/screens/profile/ChangePin";

const Navigation = createStackNavigator({

    Onboard: { screen: Onboard },
    Login: { screen: Login },

    Signup: { screen: Signup },
    UserInfor: { screen: UserInfor },
    PinEnter: { screen: PinEnter },

    Main: { screen: Main },
    SendMoney: { screen: SendMoney },
    SendMoney1: { screen: SendMoney1 },
    Success: { screen: Success },

    CashIn: { screen: CashIn },

    Settings: { screen: Settings },
    Contacts: { screen: Contacts },
    ChangePin: { screen: ChangePin },
        
}, {
    initialRouteName: 'Onboard',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fbf1dc'
        },
        header: null, 
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },
});

const App = createAppContainer(Navigation);

export default App;
