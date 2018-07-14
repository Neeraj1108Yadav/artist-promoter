import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableOpacity,
        ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

export default class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            username:'',
            password:''
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
               source={require('../images/bg.png')}>
               {/* <View style={{height:30,width:null}}/> */}
                <View style={{alignItems:'center',
                              justifyContent:'center',
                              marginTop:30,
                              width:'100%',
                              backgroundColor:'transparent'}}>
                    <Image source={require('../images/logo.png')}
                           style={{height:150,width:150}}
                           resizeMode={"contain"}/>
                </View>

            <ScrollView>
                <View style = {{flexDirection:'column',alignItems:'center',marginTop:30}}>

                <View style={style.capsule}>
                <Image source={require('../images/user.png')}
                       style={{marginLeft:30}}/>

               <TextInput 
                     style = {style.textInput}
                     onChangeText = {(username) => this.setState({username})}
                     value = {this.state.username}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "Username"
                     placeholderTextColor='#000000'/>

                </View>

                <View style={style.capsule}>
                <Image source={require('../images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput 
                     style = {style.textInput}
                     onChangeText = {(password) => this.setState({password})}
                     value = {this.state.password}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "*********"
                     placeholderTextColor='#000000'
                     secureTextEntry={true}/>
                </View>

          <TouchableOpacity
           style={style.buttonContainer}
           onPress = {() => this.props.navigation.navigate('CategoryScreen')}>
             <LinearGradient colors={['#FF41A8','#FFB847']} 
               style={style.button}>
               
                  <Text style={{color: '#ffffff',fontSize: 16,textAlign:'center'}}>LOGIN</Text>
               
            </LinearGradient>

          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('ForgetScreen')}>
           <Text style={style.textForgetPass}>FORGOT PASSWORD?</Text>

           </TouchableOpacity>

            <Text style={style.textLoginWith}>LOGIN WITH</Text>

            <View style={style.styleSocial}>

            <Image source={require('../images/fb.png')}/>

            <Image source={require('../images/tweet.png')}/>

            <Image source={require('../images/gplus.png')}/>

            </View>

           <TouchableOpacity
           onPress={() => this.props.navigation.navigate('SignupScreen')}>

           <Text style={style.textRegister}>REGISTER</Text>

          </TouchableOpacity>

         </View>
      </ScrollView>
    </ImageBackground>
  </View>
          );
      }
}
