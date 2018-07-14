import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        Image,
        TouchableOpacity} from 'react-native';
import style from './style';

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
          <Image source={require('../images/logo.png')}
                 style={{height:150,width:150}}
                 resizeMode={"contain"}/>
         </View>

         <Text style={style.textHeading}>Which user type do you belong to</Text>

         <View style={style.viewCategory}>

      <TouchableOpacity
        onPress={this.onclick}>

        <ImageBackground source={require('../images/big_button.png')}
        style={style.imageStyle}>
        <Text style={style.textCategory}>ARTIST</Text>
        </ImageBackground>

     </TouchableOpacity>

     <TouchableOpacity
      onPress={this.onClickPromoter}>
      
       <ImageBackground source={require('../images/big_button.png')}
        style={style.imageStyle}>
        <Text style={style.textCategory}>PROMOTER</Text>
        </ImageBackground>

      </TouchableOpacity>

      <TouchableOpacity
       onPress={this.onClickClub}>
       
       <ImageBackground source={require('../images/big_button.png')}
        style={style.imageStyle}>
       <Text style={style.textCategory}>CLUB</Text>
       </ImageBackground>

      </TouchableOpacity>

         </View>

      </View>
   </View>
      );
    }
}