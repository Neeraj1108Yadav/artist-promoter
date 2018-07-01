import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class Signup extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            user:'',
            pass:'',
            mail:'',
            confirmPass:''
        };
    }

    functionAlert()
    {
        Alert.alert("This is alert");
    }


    render()
    {
      return(
        <View style={{flex:1,flexDirection:'column'}}>
           <ImageBackground style ={{height:null,width:null,flex:1}}
               source={require('./images/bg.png')}>
               <View style={{height:40,width:null}}/>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                    <Image source={require('./images/logo.png')}
                           style={{height:180,width:180}}/>
                </View>

             <ScrollView>
                <View style = {{flexDirection:'column',alignItems:'center',marginTop:10}}>

                <View style={styles.capsule}>
                <Image source={require('./images/user.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {styles.textInput}
                     onChangeText = {(user) => this.setState({user})}
                     value = {this.state.user}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Username"
                     placeholderTextColor='#000000'/>
                </View>

                <View style={styles.capsule}>
                <Image source={require('./images/mail.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {styles.textInput}
                     onChangeText = {(mail) => this.setState({mail})}
                     value = {this.state.mail}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Email"
                     placeholderTextColor='#000000'/>
                </View>

                <View style={styles.capsule}>
                <Image source={require('./images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {styles.textInput}
                     onChangeText = {(pass) => this.setState({pass})}
                     value = {this.state.pass}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Create a Password"
                     placeholderTextColor='#000000'
                     secureTextEntry={true}/>
                </View>

                <View style={styles.capsule}>
                <Image source={require('./images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {styles.textInput}
                     onChangeText = {(confirmPass) => this.setState({confirmPass})}
                     value = {this.state.confirmPass}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Confirm Password"
                     placeholderTextColor='#000000'
                     secureTextEntry={true}/>
                </View>

             <LinearGradient colors={['#FF41A8','#FFB847']} style={{marginTop:10,
                                                                    height:45,
                                                                    width:250,
                                                                    borderBottomLeftRadius:20,
                                                                    borderBottomRightRadius:20,
                                                                    borderTopLeftRadius:20,
                                                                    borderTopRightRadius:20,}}>
               <TouchableHighlight style={{padding:10}}
                onPress = {this.functionAlert}>
                
                  <Text style={{color: '#ffffff',fontSize: 16,textAlign:'center'}}>SIGNUP</Text>
               
              </TouchableHighlight>
            </LinearGradient>

         </View>
       </ScrollView>

      <View style={{height:60,
                   width:null,
                   alignItems:'center',
                   justifyContent:'center',
                   bottom:0,
                   flexDirection:'row'}}>

       <Text style={{color:'#ffffff',
                    fontSize:14,
                    paddingVertical:5,
                    marginRight:5}}>Already have an account?</Text>

       <Text 
        style={{color:'#FF41A8',fontSize:14,paddingVertical:5}}
        onPress={() => this.props.navigation.navigate('LoginScreen')}>Sign in Here</Text>

       </View>
     </ImageBackground>
  </View>
      );
    }
}

const styles = StyleSheet.create({
    capsule: {
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      marginTop:10,
      backgroundColor: '#ffffff',
      height:45,
      width:250,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput:{
        width:'90%',
        color:'#000000',
        fontSize:14,
        marginRight:5,
        marginLeft:5,
        borderColor:'white',
      }
  });