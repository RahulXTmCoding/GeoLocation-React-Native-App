import React, { Component } from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from './drawers/HomeScreen'
import SettingScreen from './drawers/setting'
import  {createStackNavigator, HeaderTitle} from 'react-navigation-stack'

import Header from './drawers/header'
class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={require('../images/splash3.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
const Home_StackNavigator = createStackNavigator({
    HomeScreen: {
      screen:HomeScreen,
      navigationOptions: ({ navigation }) => {  return {    headerTitle: () => <Header title="Home" navigation={navigation} />  }; }
     }
  });

  const Setting_StackNavigator = createStackNavigator({
    SettingScreen: {
      screen:SettingScreen,
      navigationOptions: ({ navigation }) => {  return {    headerTitle: () => <Header title="Setting" navigation={navigation} />  }; },
      
    },
  });
  

const DrawerNavigation=createDrawerNavigator({

    HomeScreen:{
        screen:Home_StackNavigator,
        navigationOptions: {    title: "Home"  }
    },
    SettingScreen:{
        screen:Setting_StackNavigator,
        navigationOptions: {    title: "Setting"  }
    },
    

},

)
export default DrawerNavigation;