import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {  KeyboardAvoidingView,
    Keyboard, View, Text ,StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
class LoginScreen extends Component {
    state = {  }
    constructor(props)
    {super(props)
    this.state={
        email:"",
        password:"",
        loading:false,
        errorText:""
    }
    this.handleLogin=this.handleLogin.bind(this)
    }

    handleLogin()
    {
        if(!(this.state.email && this.state.password))
        {
            alert("Both Required");
            return;
        }
        this.setState({loading:true})

        var qs="email="+encodeURIComponent(this.state.email)+"&"+"password="+encodeURIComponent(this.state.password);
        alert("response aaya");
        fetch("http://192.168.43.212:3000/user/login",{
            method:"POST",
            body:qs,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            }
        ).then(response=>response.json()).then(responseJson=>{
            
            this.setState({loading:false})
            if(responseJson.success===true)
            {
                AsyncStorage.setItem('user',JSON.stringify(responseJson.user))
                this.props.navigation.navigate("DrawerNaviation");
            }
            else
            {
                this.setState({errorText:responseJson.error})
            }
        }).catch(error=>{
            this.setState({loading:false})

        })




    }

    render() { 
        return (

            <View style={{ flex: 1, backgroundColor: '#307ecc' ,justifyContent:'center'}}>
                
                     <Text style={{color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',fontSize:30}} onPress={()=>this.props.navigation.navigate("RegisterScreen")}>
                   Welcome Back
                    </Text>
                    
                <View style={styles.SectionStyle}>
                <TextInput
                placeholder={'Email....'}
                placeholderTextColor='#F6F6F7'
                onChangeText={(text=>this.setState({email:text}))}
                style={styles.inputStyle}
                />
                </View>
                <View style={styles.SectionStyle}>
                <TextInput
                placeholder={'Password....'}
                placeholderTextColor='#F6F6F7'
                onChangeText={(text=>this.setState({password:text}))}
                 style={styles.inputStyle}
                />
                </View>
                {
                    this.state.errorText !="" ? (
                    <Text style={styles.errorTextStyle}>{ this.state.errorText} </Text>
        ):null
                }
                 <TouchableOpacity
                 style={styles.buttonStyle}
                 activeOpacity={0.5}
                 onPress={this.handleLogin}
                 >
                     <Text styles={styles.buttonTextStyle}>
                         LOGIN
                     </Text>

                </TouchableOpacity>

                <Text style={styles.registerTextStyle} onPress={()=>this.props.navigation.navigate("RegisterScreen")}>
                    New Here ? Register
                    </Text>
                </View>
          );
    }
}
 
const styles=StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
      },
      SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },




      buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',


        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,


        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        justifyContent:'center'
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },




      inputStyle: {
        flex: 1,
        color: 'white',
        borderColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
       
      },
      registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
      },
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
})
export default LoginScreen;