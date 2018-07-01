import React, {Component} from 'react';
import { Navigator,Alert,StyleSheet,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Home from './Home';
import Direction from './Direction';
import Message from './Message';
import Profile from './Profile';
import CenterButton from './CenterButton';

export default TabNavigator(
    {
        Home:
        {
            screen:Home,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
                tabBarIcon: () => (<Image
                                  style={{ width: 24, height: 24 }}
                                  source={ require('./images/home.png')}/>),
			})
        },
        CenterButton:
        {
            screen:CenterButton,
            navigationOptions: ({ navigation }) => ({
                title: 'DatSpot',
                tabBarIcon: () =>  (<Image
                                    style={{ width: 28, height: 28}}
                                    source={ require('./images/small_button.png')}/>),               
			})
        },
        Direction:
        {
            screen:Direction,
            navigationOptions: ({ navigation }) => ({
                title: 'Discover',
                tabBarIcon: () =>  (<Image
                                    style={{ width: 24, height: 24}}
                                    source={ require('./images/compass.png')}/>),               
			})
        },
        Message:
        {
            screen:Message,
            navigationOptions: ({ navigation }) => ({
                title: 'Message',
                tabBarIcon: () => (<Image
                                    style={{ width: 24, height: 24 }}
                                    source={ require('./images/chat.png')}/>),                    
			})
        },
        Profile:
        {
            screen:Profile,
            navigationOptions: ({ navigation }) => ({
                title:'Profile',
                tabBarIcon: () => (<Image
                                   style={{ width: 20, height:24}}
                                   source={ require('./images/user_fill.png')}/>),                    
			})
        }
    },

    {
        tabBarOptions : {
            tabStyle:
            {
              backgroundColor: '#232323',
              width:null,
              height:56,
            },
            labelStyle:
            {
              fontSize:12,
              color:'#ffffff',
              marginTop:5
            },
            showLabel: true,
            showIcon: true,
        //  activeTintColor: Colors.white,
		//  inactiveTintColor: Colors.transparentWhite,	
		//	upperCaseLabel: false,
		//	pressColor: Colors.transparentWhite,
		//	scrollEnabled: false,
        },
        initialRouteName: "Home",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        order: ["Home", "Direction", "CenterButton","Message", "Profile"],
        backBehavior: "initialRoute",
        animationEnabled: false,
        swipeEnabled: false,
     }
);
