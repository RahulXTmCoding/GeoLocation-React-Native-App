
import React, { Component } from 'react';

import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack'
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import DrawerNavigation from './components/DrawerNavigation'
const Auth=createStackNavigator({
  LoginScreen:{
    screen:LoginScreen,
    navigationOptions:{
      headerShown:false,
    },
  },
  RegisterScreen:{
    screen:RegisterScreen,
    navigationOptions:{
      title:'Register',
      headerStyle:{
        backgroundColor:"#307ecc"
      },
      headerTintColor:"#fff"
    }
  }
});

const App=createSwitchNavigator({
  SplashScreen:{
    screen:SplashScreen,
    navigationOptions:{
      headerShown:false,
    }
  },
  Auth:{
    screen:Auth,

  },
  DrawerNavigation:{
    screen:DrawerNavigation,
    navigationOptions:{
      headerShown:false,
    }
  }
})


 
export default createAppContainer(App)