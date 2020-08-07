

import React, { Component } from 'react';
import { ActivityIndicator,View,StyleSheet,Image } from 'react-native'
import AsyncStorage  from  '@react-native-community/async-storage'
import { Value } from 'react-native-reanimated';

class SplashScreen extends Component {
    state = {  }
    constructor(props)
    {
        super(props)
        this.state={
            animating:true
        }
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({
            animating:false
        })
        AsyncStorage.getItem('user').then(val=>this.props.navigation.navigate(val===null?'Auth':'DrawerNavigation' ))
        }
        ,5000)

       }
    render() { 
        return (

            <View style={styles.container}>
                <Image
                source={require('../images/splash3.png')}
                style={styles.image}
                />
                <ActivityIndicator animating = {this.state.animating}  color="#FFFFFF" size='large' style={styles.activityIndicator} />
             </View>
          );
    }
}

const styles=StyleSheet.create({

    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:"#307ecc"
    },
     image:{
       width:'90%',
       resizeMode:'contain',
       margin:20
     },
     activityIndicator:{
         alignItems:"center",
         height:80,

     },

})
 
export default SplashScreen;