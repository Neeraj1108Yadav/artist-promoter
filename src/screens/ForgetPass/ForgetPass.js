import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

export default class ForgetPass extends Component {

    constructor(props)
    {
        super(props);
        this.state= {
            mail:'',
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
               <View style={{height:40,width:null}}/>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                    <Image source={require('../images/logo.png')}
                           style={{height:150,width:150}}
                           resizeMode={"contain"}/>
                </View>

                <View style = {{flexDirection:'column',alignItems:'center',marginTop:50,flex:1}}>

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

             <TouchableOpacity
              onPress = {this.functionAlert}
              style={style.buttonContainer}>

              <LinearGradient colors={['#FF41A8','#FFB847']} style={style.button}>
              <Text style={style.textReset}>RESET PASSWORD</Text>
              </LinearGradient>

             </TouchableOpacity>

            </View>

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
