import React, {Component} from 'react';
import CustomTabNavigationBar from '../components/customTabNavigator/customTabTabNavigator'
import { createBottomTabNavigator } from 'react-navigation';
import HomeArtist from './HomeArtist';
import DiscoverArtist from './DiscoverArtist';
import MessageArtist from './MessageArtist';
import ProfileArtist from './ProfileArtist';
import DatspotArtist from './DatspotArtist';

export default createBottomTabNavigator(
    {
        Home: HomeArtist,
        Discover: DiscoverArtist,
        Datspot: DatspotArtist,
        Message: MessageArtist,
        Profile: ProfileArtist,
    },
    {
        initialRouteName:"Home",
        tabBarOptions: {
            activeTintColor: 'rgb(255, 195, 43)',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: CustomTabNavigationBar
    },
);

// export default TabNavigator(
//     {
//         Home:
//         {
//             screen:Home,
//             navigationOptions: ({ navigation }) => ({
//                 title: 'Home',
//                 tabBarIcon: () => (<Image
//                                   style={{ width: 24, height: 24 }}
//                                   source={ require('./images/home.png')}/>),
// 			})
//         },
//         CenterButton:
//         {
//             screen:CenterButton,
//             navigationOptions: ({ navigation }) => ({
//                 title: 'DatSpot',
//                 tabBarIcon: () =>  (<Image
//                                     style={{ width: 28, height: 28}}
//                                     source={ require('./images/small_button.png')}/>),               
// 			})
//         },
//         Direction:
//         {
//             screen:Direction,
//             navigationOptions: ({ navigation }) => ({
//                 title: 'Discover',
//                 tabBarIcon: () =>  (<Image
//                                     style={{ width: 24, height: 24}}
//                                     source={ require('./images/compass.png')}/>),               
// 			})
//         },
//         Message:
//         {
//             screen:Message,
//             navigationOptions: ({ navigation }) => ({
//                 title: 'Message',
//                 tabBarIcon: () => (<Image
//                                     style={{ width: 24, height: 24 }}
//                                     source={ require('./images/chat.png')}/>),                    
// 			})
//         },
//         Profile:
//         {
//             screen:Profile,
//             navigationOptions: ({ navigation }) => ({
//                 title:'Profile',
//                 tabBarIcon: () => (<Image
//                                    style={{ width: 20, height:24}}
//                                    source={ require('./images/user_fill.png')}/>),                    
// 			})
//         }
//     },

//     {
//         tabBarOptions : {
//             tabStyle:
//             {
//               backgroundColor: '#232323',
//               width:null,
//               height:56,
//             },
//             labelStyle:
//             {
//               fontSize:12,
//               color:'#ffffff',
//               marginTop:5
//             },
//             showLabel: true,
//             showIcon: true,
//         //  activeTintColor: Colors.white,
// 		//  inactiveTintColor: Colors.transparentWhite,	
// 		//	upperCaseLabel: false,
// 		//	pressColor: Colors.transparentWhite,
// 		//	scrollEnabled: false,
//         },
//         initialRouteName: "Home",
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         order: ["Home", "Direction", "CenterButton","Message", "Profile"],
//         backBehavior: "initialRoute",
//         animationEnabled: false,
//         swipeEnabled: false,
//      }
// );
