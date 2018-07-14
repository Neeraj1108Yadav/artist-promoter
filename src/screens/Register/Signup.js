import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableOpacity,
        ScrollView,
        ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default class Signup extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            fullname:'',
            username:'',
            pass:'',
            mail:'',
            confirmPass:''
        };
    }

    functionAlert()
    {
        Alert.alert("This is alert");
    }
//================================ REGISTER API =================================================//
    registration()
    {
        console.log({
            "name":this.state.fullname,
            "username":this.state.username,
            "password":this.state.pass,
            "email":this.state.mail,
            "signup":true
        });

        if(this.state.fullname.length===0)
        {
            ToastAndroid.show('Please enter your fullname', ToastAndroid.SHORT);
        }
        else if(this.state.username.length===0)
        {
            ToastAndroid.show('Please enter your username', ToastAndroid.SHORT);
        }
        else if(this.state.mail.length===0)
        {
            ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
        }
        else if(this.state.mail.match(emailPattern)===null)
        {
            ToastAndroid.show('Please enter valid email', ToastAndroid.SHORT);
        }
        else if(this.state.pass.length===0)
        {
            ToastAndroid.show('Please enter your password', ToastAndroid.SHORT);
        }
        else if(this.state.pass.length < 6)
        {
            ToastAndroid.show('Please must greater than 6 characters', ToastAndroid.SHORT);
        }
        else if(this.state.confirmPass.length===0)
        {
            ToastAndroid.show('Please confirm your password', ToastAndroid.SHORT);
        }
        else if(this.state.confirmPass !== this.state.pass) 
        {
            ToastAndroid.show('Password did not match', ToastAndroid.SHORT);
        }
        else
        {
            // debugger;

            fetch('https://datspot.com/api/auth/local',{

             method: 'POST',
             headers:{
                 Accept:'application/json',
                'Content-Type': 'application/json',
             },

             body: JSON.stringify({
                "name": this.state.fullName,
                "username": this.state.username,
                "password": this.state.pass,
                "email": this.state.mail,
                "accType": "user",
                "signup": true
             })

            })
            .then(response => {

                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
            })
            .then(([statusCode,data])=>{

                if(statusCode===200)
                {
                    ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
                    this.props.navigation.navigate('CategoryScreen');
                }
                else
                {
                    Alert.alert("Registration Fail");
                }
            })
            .catch((error) => {
                console.log(error);
                // this.setState({ loading: false, fetchFlag: false });
                Alert.alert("Network Error","Looks like the internet is not working");
            });
        }
      
    }
    
//===================================== REGISTER API ================================================//
    render()
    {
      return(
        <View style={{flex:1,flexDirection:'column'}}>
           <ImageBackground style ={{height:null,width:null,flex:1}}
               source={require('../images/bg.png')}>

            <ScrollView>
             <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                    <Image source={require('../images/logo.png')}
                           style={{height:150,width:150}}
                           resizeMode={"contain"}/>
                </View>

            
                <View style = {{flexDirection:'column',alignItems:'center',marginTop:20}}>


                 <View style={style.capsule}>
                <Image source={require('../images/user.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {style.textInput}
                     onChangeText = {(fullname) => this.setState({fullname})}
                     value = {this.state.fullname}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Fullname"
                     placeholderTextColor='#000000'/>
                </View>

                <View style={style.capsule}>
                <Image source={require('../images/user.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {style.textInput}
                     onChangeText = {(username) => this.setState({username})}
                     value = {this.state.username}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Username"
                     placeholderTextColor='#000000'/>
                </View>

                <View style={style.capsule}>
                <Image source={require('../images/mail.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {style.textInput}
                     onChangeText = {(mail) => this.setState({mail})}
                     value = {this.state.mail}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Email"
                     placeholderTextColor='#000000'/>
                </View>

                <View style={style.capsule}>
                <Image source={require('../images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {style.textInput}
                     onChangeText = {(pass) => this.setState({pass})}
                     value = {this.state.pass}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Create a Password"
                     placeholderTextColor='#000000'
                     secureTextEntry={true}/>
                </View>

                <View style={style.capsule}>
                <Image source={require('../images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {style.textInput}
                     onChangeText = {(confirmPass) => this.setState({confirmPass})}
                     value = {this.state.confirmPass}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Confirm Password"
                     placeholderTextColor='#000000'
                     secureTextEntry={true}/>
                </View>

         <TouchableOpacity
          onPress = {() => {this.registration();}}
          style={style.buttonContainer}>

             <LinearGradient colors={['#FF41A8','#FFB847']} style={style.button}>
             <Text style={style.textSignUp}>SIGNUP</Text>
            </LinearGradient>

         </TouchableOpacity>      

         </View>
       </ScrollView>

       <TouchableOpacity

       onPress={() => this.props.navigation.navigate('LoginScreen')}>   
       <View style={style.viewAccount}>
       <Text style={style.simpleText}>Already have an account?</Text>
       <Text style={style.textLogin}>Sign in Here</Text>
       </View>
       </TouchableOpacity>   

     </ImageBackground>
  </View>
      );
    }
}
