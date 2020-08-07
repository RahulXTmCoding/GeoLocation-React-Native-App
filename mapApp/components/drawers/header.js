import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon2  from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/Entypo';
class Header extends Component {
    state = {  }

    constructor(props)
    {
        super(props)
        this.menuHandle=this.menuHandle.bind(this)
    }

     menuHandle()
     {
         this.props.navigation.openDrawer();
     }
    render() { 
        return (

            <View style={styles.container}>
 

<Icon style={styles.icons} onPress={this.menuHandle} name="menu" size={24} color="#ffffff" />

     
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{this.props.title}</Text>
</View>

               </View> 

          );
    }
}
 
export default Header;


const styles=StyleSheet.create({

    container:{

        flexDirection:'row',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"110%",
        height:55,
        alignSelf:'stretch',
        marginLeft:-20,
        
        backgroundColor: "#000"


    }, headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
      },
      headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
        color: "#fff"
      },
      icons: {
        position: "absolute",
        color:'white',
        left: 36,
        
    }


})