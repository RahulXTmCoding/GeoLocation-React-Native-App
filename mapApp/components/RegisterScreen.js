import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
class RegisterScreen extends Component {
    state = {  }

    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            errortext:'',
        }
        this.handleSubmitButton=this.handleSubmitButton.bind(this);
    }
    handleSubmitButton()
    {
        if(!(name && email && password))
        {
            alert("All Fields Required");
        }
        
        qs="name="+encodeURIComponent(this.state.name)+"&"+"email="+encodeURIComponent(this.state.email)+"&"+"password="+encodeURIComponent(this.state.password);

        fetch("http://192.168.43.212:3000/user/register",{

        method:'POST',
        body:qs
        }).then(response=>response.json()).then(responseJson=>{

            this.setState({loading:false})
            if(responseJson.success===true)
            {
                AsyncStorage.setItem('user',responseJson.user)
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
            <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
            
            <ScrollView keyboardShouldPersistTaps="handled">

              <KeyboardAvoidingView enabled>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=>this.setState({name:text})}
                    
                    placeholder="Enter Name"
                    placeholderTextColor="#F6F6F7"
                    autoCapitalize="sentences"
                    returnKeyType="next"
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=>this.setState({email:text})}
                   
                    placeholder="Enter Email"
                    placeholderTextColor="#F6F6F7"
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=>this.setState({password:text})}
                   
                    placeholder="Enter Password"
                    placeholderTextColor="#F6F6F7"
                    secureTextEntry={true}
                  />
                </View>
               
                {this.state.errortext != '' ? (
                  <Text style={styles.errorTextStyle}> {this.state.errortext} </Text>
                ) : null}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={this.handleSubmitButton}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
         );
    }
}
 
export default RegisterScreen;
const styles = StyleSheet.create({
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
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'white',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  });