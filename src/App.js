/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import {StackNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import Login from './screens/Login/Login';
import Signup from './screens/Register/Signup';
import ForgetPass from './screens/ForgetPass/ForgetPass';
import Category from './screens/Category/Category';
import SubCategory from './screens/SubCategory/SubCategory';
import SubCategory_Two from './screens/SubCategory/SubCategory_Two';
import Fb_Tweet from './screens/SocialLogin/Fb_Tweet';
import MainActivity from './screens/MainActivity';
import HomeArtist from './screens/HomeArtist';
import DiscoverArtist from './screens/DiscoverArtist';
import MessageArtist from './screens/MessageArtist';
import ProfileArtist from './screens/ProfileArtist';
import UpcomingEvent from './screens/UpcomingEvent';
import EventsAttending from './screens/EventsAttending';
import EventsAttended from './screens/EventsAttended';
import CenterButton from './screens/DatspotArtist';
import HomeFollowAll from './screens/HomeFollowAll';
import ClubDetail from './screens/ClubDetail';

//======================= CLUB CLASSES ==============================//
import clubHome from './screens/club/clubHome';
import clubAdd from './screens/club/clubAdd';
import clubEvent from './screens/club/clubEvent';
import homeEventList from './screens/club/homeEventList';

import clubPayment from './screens/club/clubPayment';
import addEvent from './screens/club/addEvent';
import clubChat from './screens/club/clubChat';
import clubProfile from './screens/club/clubProfile';
import autoVouchers from './screens/club/autoVouchers';
import redeemVoucher from './screens/club/redeemVoucher';
import sideDrawer from './screens/club/sideDrawer';
 
const RootStack = StackNavigator({

  LoginScreen:{
    screen:Login,
    navigationOptions:{
      header:null
      }
    },
  SignupScreen: {
    screen:Signup,
    navigationOptions:
    {
      header:null
    }
   },
  ForgetScreen:{
    screen:ForgetPass,
    navigationOptions:
      {
       header:null
      }
     },
   CategoryScreen:{
     screen:Category,
     navigationOptions:
     {
       header:null
     }
   },
   SubScreenOne:{
      screen:SubCategory,
      navigationOptions:
      {
        header:null
      }
   },
   SubScreenTwo:{
    screen:SubCategory_Two,
    navigationOptions:
    {
      header:null
    }
   },
   FbTweetScreen:{
     screen:Fb_Tweet,
     navigationOptions:
     {
       header:null
     }
   },
   MainScreen:{
     screen:MainActivity,
     navigationOptions:
     {
       header:null
      // headerTintColor: '#000000',
      // headerStyle: {
      //   height:56,
      //   position: 'absolute',
      //   backgroundColor: '#000000',
      //   elevation:0,
      //   zIndex: 100,
      //   top: 0,
      //   left: 0,
      //   right: 0
      }
      // headerTitle:(
      //     <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',margin:15}}>
      
      //     {/* <Image style={{ width: 24, height: 24}} source={require('./screens/images/menu.png')}/>  */}
      //     <Text style={{fontSize:18,color:'#ffffff',fontWeight:'bold'}}> DATSPOT </Text>
      //     <Image style={{ width: 24, height: 24}} source={require('./screens/images/notification.png')}/>

      //     </View>
      // )
   },
   ClubDetailScreen:
   {
     screen:ClubDetail,
     navigationOptions:
     {
       header:null
     }
   },
   clubHomeScreen:
   {
      screen:clubHome,
      navigationOptions:
      {
        header:null
      }
   },
   clubAddScreen:
   {
     screen:clubAdd,
     navigationOptions:
     {
       header:null
     }
   },
   eventHomeScreen:
   {
      screen:homeEventList,
      navigationOptions:
      {
        header:null
        // headerTintColor: '#000000',
        // headerStyle: {
        //   height:56,
        //   position: 'absolute',
        //   backgroundColor: '#000000',
        //   elevation:0,
        //   zIndex: 100,
        //   top: 0,
        //   left: 0,
        //   right: 0
        // },
      //   headerTitle:(
      //     <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',margin:15}}>

      //   <TouchableOpacity activeOpacity = {.5} 
      //                 onPress={this.Drawer}>

      //     <Image style={{ width: 24, height: 24}} source={require('./screens/images/menu.png')}/> 

      //  </TouchableOpacity>

      //     <Text style={{fontSize:18,color:'#ffffff',fontWeight:'bold'}}> DATSPOT </Text>
      //     <Image style={{ width: 24, height: 24}} source={require('./screens/images/notification.png')}/>

      //     </View>
      // )
    }
   },
   addEventScreen:
   {
     screen:addEvent,
     navigationOptions:
     {
       header:null
     }
   },
  },
  {
    initialRouteName: 'MainScreen',
  }
);


export default class App extends Component {
  render() {
    return<RootStack/>;
  }
}

const Drawer = DrawerNavigator({
  autoVoucherScreen: {
      screen: autoVouchers,
    },
    redeemVoucherScreen: {
      screen: redeemVoucher,
    },
  },
  {
      initialRouteName: 'autoVoucherScreen',
});


