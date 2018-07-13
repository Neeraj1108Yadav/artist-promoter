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
import { width, height, totalSize } from 'react-native-dimension';
import Dialog from "react-native-dialog";

export default class Direction extends Component {

  state = {
    dialogVisible: false
  };
  
  functionAlert()
  {
      Alert.alert("This is alert");
  }

  showDialog = () =>
   {
    this.setState({ dialogVisible: true });
  };
 
  handleSubmit = () => {
    this.setState({ dialogVisible: false });
  };
    render()
    {
      return(

    <ScrollView style={{flex:1,backgroundColor:'#000000'}}>

      <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>

       <View style={{flexDirection:'row',marginHorizontal:15,marginTop:54}}>
        
       <View style={{flexDirection:'row'}}
       flexBasis="70%">

        <Text style={styles.textClubDescription}>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. </Text>

         </View>
        
        <View style={{justifyContent:'flex-end',flexDirection:'row'}}
              flexBasis="30%">

        <Image style={{margin:5}}
        source={require('./images/map.png')}/>

        </View>
      
       </View>

        <ImageBackground style={styles.imageSize}
                         source={require('./images/d6.jpeg')}>


        <View style={styles.clubArea}>

           <View style={{flexDirection:'column',marginRight:5}}
               flexBasis="60%">
            
           <Text style={styles.textClubName}>London Club</Text>
           <Text style={styles.textClubDescription}>Coricon, London</Text>

         </View>

          <View style={{flexDirection:'row',marginLeft:5,justifyContent:'flex-end'}}
                flexBasis="40%">

            <Text style={styles.capsulText}>POP</Text>
            <Text style={styles.capsulText}>JAZZ</Text>
            
         </View>

        </View>
        </ImageBackground>

        <View style={styles.buttonArea}>

         <View  style={{marginRight:5}}
                flexBasis="50%">
              
            <LinearGradient colors={['#FF41A8','#FFB847']} 
                            style={{width:"70%",
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
            
                  <Text style={{color:'#ffffff',fontSize:15}}>VIEW DETAIL</Text>
               
                </TouchableHighlight>

               </LinearGradient>

         </View>

         <View  style={{marginLeft:5}}
                flexBasis="50%">
               
            <LinearGradient colors={['#FF41A8','#FFB847']} 
                            style={{width:"70%",
                           borderBottomLeftRadius:20,
                           borderBottomRightRadius:20,
                           borderTopLeftRadius:20,
                           borderTopRightRadius:20,
                           alignItems:'center',
                           justifyContent:'center'}}>
                                                                                                                                  
                   <TouchableHighlight style={{
                                       paddingHorizontal:15,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
                    onPress = {this.functionAlert}>
            
                  <Text style={{color:'#ffffff',fontSize:15}}>FOLLOW</Text>
               
                </TouchableHighlight>

               </LinearGradient>
               
         </View>

        </View>

        {/* <View style={styles.viewDialog}>

        <Dialog visible={true}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="SUBMIT" onPress={this.handleSubmit} />
        </Dialog>

        </View> */}

      </View>

    </ScrollView>
      );
    }
}

const styles = StyleSheet.create({

  capsulText:
  {
   borderBottomLeftRadius:15,
   borderBottomRightRadius:15,
   borderTopLeftRadius:15,
   borderTopRightRadius:15,
   paddingVertical:5,
   paddingHorizontal:10,
   backgroundColor:'#FF41A8',
   fontSize:14,
   fontWeight:'bold',
   color:'#ffffff',
   margin:3,
   fontWeight:'bold',
   justifyContent:'center',
   alignSelf:'center'
  },
  textClubName:
  {
      color:'#ffffff',
      fontSize:15,
      fontWeight:'bold'
  },
  textClubDescription:
  {
      color:'#ffffff',
      fontSize:14,
      marginRight:5
  },
  imageSize:
  {
    height: height(60), // 60% of height device screen
    width: null,
    marginHorizontal:10,
    marginVertical:15
  },
  clubArea:
  {
    marginBottom:20,
    bottom:0,
    marginHorizontal:10,
    flexDirection:'row',
    position:'relative',
    top:"90%"
  },
  buttonArea:
  {
    marginHorizontal:10,
    flexDirection:'row',
    marginVertical:10
  },
  viewDialog:
  {
    backgroundColor:'#000000',
    borderRadius:20,
    height:height(70),
    width:null,
    marginHorizontal:30,
    padding:20
  }
});