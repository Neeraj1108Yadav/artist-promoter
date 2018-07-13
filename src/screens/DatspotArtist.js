import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import UpcomingEvent from './UpcomingEvent';
import EventsAttending from './EventsAttending';
import EventsAttended from './EventsAttended';

export default TabNavigator(
    {
        UpcomingEvent:
        {
          screen:UpcomingEvent,
          navigationOptions: ({ navigation }) => ({
            title:'Upcoming Event',               
          })
        },
        EventsAttending:
        {
          screen:EventsAttending,
          navigationOptions: ({ navigation }) => ({
            title:'Events Attending',                  
          })
        },
        EventsAttended:
        {
          screen:EventsAttended,
          navigationOptions: ({ navigation }) => ({
            title:'Events Attended',                  
          })
        }
    },
    {
      tabBarOptions: 
      {
          style: 
          {
            backgroundColor: '#000000',
            marginTop:54,
            width:null,
            height:70,
            justifyContent:'space-between'
          },
          labelStyle:
          {
            fontSize:12
          },
          indicatorStyle: 
          {
            backgroundColor: '#FF41A8',
            height:null,
            top:0
          },
        activeTintColor:'white',
        inactiveTintColor:'white',
      },
       initialRouteName: "UpcomingEvent",
       tabBarPosition: 'top',
       order: ["UpcomingEvent", "EventsAttending", "EventsAttended"],
       backBehavior: "initialRoute",
       animationEnabled: false,
       swipeEnabled: true,
      
    }
  );