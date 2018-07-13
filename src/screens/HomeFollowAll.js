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
import { width, height, totalSize } from 'react-native-dimension';

export default class HomeFollowAll extends Component{

    functionAlert()
    {
      Alert.alert("This is alert");
    }

    onclick = () => 
    {
      this.props.navigation.navigate('ClubDetailScreen')
    };

    render()
    {
      const { navigate } = this.props.navigation;
      return(

      <ScrollView style={{flex:1,backgroundColor:'#000000'}}>
         <View style = {{flex:1,backgroundColor:'#000000',flexDirection:'column',marginBottom:15}}>

         <View style={{flexDirection:'row',width:null,margin:10}}>

         <TouchableOpacity activeOpacity = {.5} 
                             onPress={this.onclick}>

          <Image  style={styles.imageClubCircle}
                  source={require('./images/d4.jpeg')}
                  flexBasis="15%"/>

        </TouchableOpacity>

          <View style={{flexDirection:'column',
                        marginLeft:10}}
                        flexBasis="85%">

           <Text style={styles.textClubName}>London Club</Text>
           <Text style={styles.textStyle}>1k followers</Text>
          </View>

         </View>

         <Text style={styles.textClubDescription}>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>

        <View style={{flexDirection:'row',margin:5,justifyContent:'space-between'}}>

         <Image style={styles.clubImages}
                 source={require('./images/d5.jpeg')}/>

          <Image style={styles.clubImages}
                 source={require('./images/d6.jpeg')}/>

          <Image style={styles.clubImages}
                 source={require('./images/d1.jpeg')}/>

        </View>

        <View style={{flexDirection:'row',margin:5,justifyContent:'space-between'}}>

        <Image style={styles.clubImages}
        source={require('./images/d3.jpeg')}/>

        <Image style={styles.clubImages}
        source={require('./images/d4.jpeg')}/>

        <Image style={styles.clubImages}
        source={require('./images/d2.jpeg')}/>

        </View>

        <View style={{flexDirection:'row',marginHorizontal:15,marginVertical:15}}>
         
          <View style={{flexDirection:'row',justifyContent:'space-between'}}
                flexBasis="45%"> 

           <Text style={styles.textStyle}>203 Likes</Text>

           <Text style={{color:'#ffffff',fontSize:13}}>1000 Comments</Text>

          </View>

          <View flexBasis="55%">

           <LinearGradient colors={['#FF41A8','#FFB847']} 
              style={{width:"80%",
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                alignItems:'center',
                alignSelf:'flex-end',
                justifyContent:'center'}}>
                                                                                                                                  
           <TouchableHighlight style={{
                                       paddingHorizontal:15,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
            onPress = {() => this.props.navigation.navigate('ClubDetailScreen')}>
            
            <Text style={{color:'#ffffff',fontSize:15}}>Submit Proposal</Text>
               
           </TouchableHighlight>
      </LinearGradient>

          </View>

        </View>

     </View>
 </ScrollView>
      );
    }
}

const styles = StyleSheet.create({

     imageClubCircle:
     {
        height: 60,
        width: 60,
        borderRadius: 30,
        flex:1,
        alignSelf:'stretch'
     },
     textClubName:
     {
         color:'#ffffff',
         fontSize:14,
     },
     textStyle:
     {
       color:'#ffffff',
       fontSize:13,
     },
     textClubDescription:
     {
         color:'#ffffff',
         fontSize:14,
         marginHorizontal:10,
         marginVertical:5
     },
     clubImages:
     {
      height: height(15), // 15% of height device screen
      width: width(30),
      marginHorizontal:5,
     }

});