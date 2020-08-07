import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
class SettingScreen extends Component {
    state = {  }
    constructor(props)
    {
        super(props)
    this.handelLogout=this.handelLogout.bind(this);
    }

    handelLogout()
    {
        AsyncStorage.removeItem('user');
        this.props.navigation.navigate("LoginScreen");
    }
    render() { 
        return ( 
            <View>

                <TouchableOpacity style={styles.button}>
                <Text style={styles.text} onPress={this.handelLogout}>
                    Logout
                    </Text>
                    </TouchableOpacity>
                </View>
         );
    }
}
 
export default SettingScreen;


const styles=StyleSheet.create({


    button:{

        justifyContent:'center',
        alignItems:"center",
        padding:20,
        borderRadius:10,
        backgroundColor:'black'

    },
    text:{
        color:'white',
        fontSize:15,

    }


})


