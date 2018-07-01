import React, {Component} from 'react';
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

export default class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            user:'',
            pass:''
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
               <View style={{height:30,width:null}}/>
                <View style={{alignItems:'center',
                              justifyContent:'center',
                              marginTop:30,
                              width:'100%',
                              backgroundColor:'transparent'}}>
                    <Image source={require('./images/logo.png')}
                           style={{height:150,width:150}}/>
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
                <Image source={require('./images/pass.png')}
                       style={{marginLeft:30}}/>

               <TextInput style = {styles.textInput}
                     onChangeText = {(pass) => this.setState({pass})}
                     value = {this.state.pass}
                     underlineColorAndroid = 'rgba(0,0,0,0)'
                     placeholder = "*********"
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
                onPress = {() => this.props.navigation.navigate('CategoryScreen')}>
                
                  <Text style={{color: '#ffffff',fontSize: 16,textAlign:'center'}}>LOGIN</Text>
               
              </TouchableHighlight>
            </LinearGradient>

            <Text style={{color:'#ffffff',
                         fontSize:15,
                         fontWeight:'bold',
                         padding:10,
                         alignSelf:'center'}}
                  onPress={() => this.props.navigation.navigate('ForgetScreen')}>FORGOT PASSWORD?</Text>

            <Text style={{color:'#ffffff',
                         fontSize:15,
                         marginTop:15,
                         fontWeight:'bold',
                         padding:5,
                         alignSelf:'center'}}>LOGIN WITH</Text>

            <View style={{marginTop:10,
                         height:50,
                         width:150,
                        flexDirection:'row',
                        justifyContent:'space-between'}}>

            <Image source={require('./images/fb.png')}/>

            <Image source={require('./images/tweet.png')}/>

            <Image source={require('./images/gplus.png')}/>

            </View>

           <Text style={{color:'#ffffff',
                         fontSize:18,
                         marginTop:10,
                         fontWeight:'bold',
                         padding:10,
                         alignSelf:'center'}}
                  onPress={() => this.props.navigation.navigate('SignupScreen')}>REGISTER</Text>
            
         </View>
      </ScrollView>
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