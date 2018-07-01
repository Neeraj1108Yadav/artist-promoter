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

export default class Fb_Tweet extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }

    render()
    {
       return(

        <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

          <View style={{flex:1,flexDirection:'column'}}>
         
         <View style={{height:40,width:null}}/>

         <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Image source={require('./images/logo.png')}
                 style={{height:140,width:140}}/>
         </View>

         <Text style={{color:'#ffffff',fontSize:15,alignSelf:'center',marginTop:20}}>
          Sync your account and hello yourself</Text>

           <Text style={{color:'#ffffff',fontSize:15,alignSelf:'center',marginTop:5}}>
          to reach to maximum folks </Text>

           <TouchableHighlight style={{padding:10,
                                       marginTop:25,
                                       height:40,
                                       width:250,
                                       borderBottomLeftRadius:5,
                                       borderBottomRightRadius:5,
                                       borderTopLeftRadius:5,
                                       borderTopRightRadius:5,
                                       backgroundColor:'#3b5998',
                                       alignSelf:'center'}}
                               onPress = {this.functionAlert}>
                
               <Text style={{color:'#ffffff',
                            fontSize: 15,
                            textAlign:'center',
                            }}>Sync Facebook</Text>
               
          </TouchableHighlight>

          <TouchableHighlight style={{padding:10,
                                       marginTop:10,
                                       height:40,
                                       width:250,
                                       borderBottomLeftRadius:5,
                                       borderBottomRightRadius:5,
                                       borderTopLeftRadius:5,
                                       borderTopRightRadius:5,
                                       backgroundColor:'#00aced',
                                       alignSelf:'center'}}
                               onPress = {this.functionAlert}>
                
               <Text style={{color:'#ffffff',
                            fontSize: 15,
                            textAlign:'center',
                            }}>Sync Twitter</Text>
               
          </TouchableHighlight>

        </View>
          
        <View style={{height:60,
                   width:null,
                   alignItems:'center',
                   justifyContent:'center',
                   bottom:0,
                   marginBottom:20}}>

                <LinearGradient colors={['#FF41A8','#FFB847']} style={{
                                                                    height:40,
                                                                    width:250,
                                                                    borderBottomLeftRadius:20,
                                                                    borderBottomRightRadius:20,
                                                                    borderTopLeftRadius:20,
                                                                    borderTopRightRadius:20,}}>
               <TouchableHighlight style={{padding:10}}
                onPress = {() => this.props.navigation.navigate('MainScreen')}>
                
               <Text style={{color:'#ffffff',fontSize: 15,textAlign:'center'}}>PROCEED</Text>
               
              </TouchableHighlight>
              </LinearGradient>

           </View>
        </View>

       );
    }
}