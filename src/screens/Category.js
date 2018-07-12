import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView,
        TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class Category extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }

    onclick = () =>
    {
        this.props.navigation.navigate('SubScreenOne')
    };

    onClickClub = () =>
    {
        this.props.navigation.navigate('clubHomeScreen')
    };

    onClickPromoter = () =>
    {
        this.props.navigation.navigate('eventHomeScreen')
    };
  

    render()
    {
      return(
     <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

        <View style={{flex:1,flexDirection:'column'}}>
         
         <View style={{height:40,width:null}}/>

         <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Image source={require('./images/logo.png')}
                 style={{height:140,width:140}}
                 resizeMode={"contain"}/>
         </View>

         <Text style={{color:'#ffffff',fontSize:15,alignSelf:'center',marginTop:20}}>Which user type do you belong to</Text>

         <View style={{marginTop:10,
                      padding:10,
                      justifyContent:'space-between',
                      marginHorizontal:20,
                      alignItems:'center',
                      flexDirection:'row'}}>

      <TouchableOpacity activeOpacity = {.5} 
                        onPress={this.onclick}>

         <ImageBackground source={require('./images/big_button.png')}
                style={{height:85,width:85,alignItems:'center',justifyContent:'center'}}>

         <Text style={{color:'#ffffff',fontSize:14,fontWeight:'bold',alignSelf:'center'}}>ARTIST</Text>

         </ImageBackground>

     </TouchableOpacity>

     <TouchableOpacity activeOpacity = {.5} 
                        onPress={this.onClickPromoter}>

         <ImageBackground source={require('./images/big_button.png')}
               style={{height:85,width:85,alignItems:'center',justifyContent:'center'}}>


         <Text style={{color:'#ffffff',fontSize:14,fontWeight:'bold',alignSelf:'center'}}>PROMOTER</Text>

          </ImageBackground>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = {.5} 
                        onPress={this.onClickClub}>

         <ImageBackground source={require('./images/big_button.png')}
                style={{height:85,width:85,alignItems:'center',justifyContent:'center'}}>

         <Text style={{color:'#ffffff',fontSize:14,fontWeight:'bold',alignSelf:'center'}}>CLUB</Text>

         </ImageBackground>

   </TouchableOpacity>

         </View>

      </View>

          {/* <View style={{height:60,
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
                onPress = {() => this.props.navigation.navigate('SubScreenOne')}>
                
               <Text style={{color:'#ffffff',fontSize: 15,textAlign:'center'}}>PROCEED</Text>
               
              </TouchableHighlight>
              </LinearGradient>

           </View> */}
        </View>
      );
    }
}