import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView,
        Modal} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from 'react-native-elements'
import { width, height} from 'react-native-dimension';


export default class clubAdd extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
           clubName:'',
           atmosphere:'',
           location:'',
           contactNumber:'',
           checked:false,
           addClub: false,
           popUpClubName:'',
           popUpEmail:'',
           popUpMsg:'',
           addClubDone:false,
        };
    }

    addClubFunction(visible)
    {
      this.setState({addClub:visible});
    }

    clubSubmitDone(doneVisible)
    {
      this.setState({addClubDone:doneVisible});
    }
  
    functionAlert()
    {
        Alert.alert("This is alert");
    }


    render()
    {
        return(

   <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>      
      <ScrollView style={{flex:1,backgroundColor:'#000000'}}>
        
        <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>

         <Image source={require('./imagesClub/logo.jpg')}
                     flexBasis="100%"
                     style={{height:120,
                            width:120,
                            alignSelf:'center',
                            marginTop:30}}/>

       <Text style={styles.textTitle}>Add club manually</Text>
       <Text style={styles.textSubhead}>Please fill in the details to add your club</Text>

       <View style={{width:null,height:30}}></View>

       <Text style={styles.textHeading}>Club Name</Text>
       <View style={styles.viewEdittext}>
       <TextInput style = {styles.textEdittext}
                     onChangeText = {(clubName) => this.setState({clubName})}
                     value = {this.state.clubName}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
       </View>

        <Text style={styles.textHeading}>Atmosphere</Text>
        <View style={styles.viewEdittext}>
        <TextInput style = {styles.textEdittext}
                     onChangeText = {(atmosphere) => this.setState({atmosphere})}
                     value = {this.state.atmosphere}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
        </View>

        <Text style={styles.textHeading}>Location</Text>
        <View style={styles.viewEdittext}>
        <TextInput style = {styles.textEdittext}
                     onChangeText = {(location) => this.setState({location})}
                     value = {this.state.location}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
        </View>

        <Text style={styles.textHeading}>Contact Number</Text>
        <View style={styles.viewEdittext}>
        <TextInput style = {styles.textEdittext}
                     onChangeText = {(contactNumber) => this.setState({contactNumber})}
                     value = {this.state.contactNumber}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
        </View>

        <Text style={styles.textHeading}>Images</Text>
        <LinearGradient colors={['#FF41A8','#FFB847']} 
                      style={{width:"30%",
                      borderRadius:20,
                      alignItems:'center',
                      marginVertical:10,
                      marginHorizontal:20,
                      justifyContent:'center'}}>
                                                                                                                                  
            <TouchableHighlight style={{
                                       paddingHorizontal:10,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
            onPress = {this.functionAlert}>
            
            <Text style={{color:'#ffffff',fontSize:15}}>ADD IMAGES</Text>
               
           </TouchableHighlight>

         </LinearGradient>

         <View style={{marginHorizontal:15,marginBottom:15}}>
          
          <CheckBox
          size={28}
          title='Click Here'
          checked={this.state.checked}
          containerStyle={{backgroundColor:'#000000',borderColor:'#000000'}}
          textStyle={{color:'#ffffff',fontSize:12}}
          checkedColor='#ffffff'
          onPress={() => this.setState({checked: !this.state.checked})}/>
                
         </View>

       </View>

      </ScrollView>

      <View style={{bottom:0,marginVertical:5,marginHorizontal:20,flexDirection:'row'}}>

      <LinearGradient colors={['#FF41A8','#FFB847']}
                      flexBasis="40%" 
                      style={{width:"50%",
                      borderRadius:20,
                      alignItems:'center',
                      alignSelf:'center',
                      marginHorizontal:20,
                      marginVertical:5,                     
                      justifyContent:'center'}}>

       <View style={styles.buttonBlack}>

       <TouchableHighlight style={{
                                  paddingHorizontal:10,
                                  paddingVertical:8,
                                  justifyContent:'center',
                                  alignItems:'center'}}
                                       
        onPress = {this.functionAlert}>
            
       <Text style={{color:'#ffffff',fontSize:15}}>BACK</Text>
               
      </TouchableHighlight>

      </View>

     </LinearGradient>


      <LinearGradient colors={['#FF41A8','#FFB847']}
                      flexBasis="40%" 
                      style={{width:"50%",
                      borderRadius:20,
                      marginHorizontal:20,  
                      marginVertical:5,      
                      alignItems:'center',
                      alignSelf:'center',
                      justifyContent:'center'}}>

       <TouchableHighlight style={{
                                  paddingHorizontal:10,
                                  paddingVertical:8,
                                  justifyContent:'center',
                                  alignItems:'center'}}
                                       
            onPress = {() => {this.addClubFunction(true)}}>
            
       <Text style={{color:'#ffffff',fontSize:15}}>ADD CLUB</Text>
               
      </TouchableHighlight>

     </LinearGradient>

      </View>


{/* //========================POP UP ======================================// */}

      <Modal
         animationType="fade"
         transparent={false}
         visible={this.state.addClub}
         onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

         <View style={{height:"80%",
                     width:"80%",
                     flexDirection:'column',
                     backgroundColor:'#000000',
                     alignSelf:'center',
                     borderRadius:20,
                     position:'absolute',
                     top:50,
                     bottom:0,
                     left:40,
                     right:0}}>

         <Text style={{alignSelf:'center',
                      fontSize:14,
                      color:'#ffffff',
                      marginHorizontal:20,
                      marginTop:20,
                      }}>You want to go ahead with verification.</Text>

          <Text style={{alignSelf:'center',
                      fontSize:14,
                      color:'#ffffff',
                      marginHorizontal:20,
                      marginTop:5,
                      marginBottom:15
                      }}>Please fill in the details to proceed further.</Text>

          <Text style={styles.textPopUpHeading}>Club Name</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(popUpClubName) => this.setState({popUpClubName})}
                     value = {this.state.popUpClubName}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Official Email</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(popUpEmail) => this.setState({popUpEmail})}
                     value = {this.state.popUpEmail}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Message</Text>
          <View style={styles.viewPopUpMessage}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(popUpMsg) => this.setState({popUpMsg})}
                     value = {this.state.popUpMsg}
                     multiline={true}
                     numberOfLines = {10}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

           <View style={{marginBottom:10,marginHorizontal:10,flexDirection:'row',justifyContent:'center'}}>

            <LinearGradient colors={['#FF41A8','#FFB847']}
                            flexBasis="40%" 
                            style={{width:"50%",
                            borderRadius:20,
                            alignItems:'center',
                            marginHorizontal:10,
                            marginVertical:5,                     
                            justifyContent:'center'}}>

            <View style={styles.buttonBlack}>

            <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
            onPress = {() => {this.addClubFunction(false)}}>
      
            <Text style={{color:'#ffffff',fontSize:15}}>BACK</Text>
         
            </TouchableHighlight>

            </View>

            </LinearGradient>


          <LinearGradient colors={['#FF41A8','#FFB847']}
                          flexBasis="40%" 
                          style={{width:"50%",
                          borderRadius:20,
                          marginHorizontal:10,  
                          marginVertical:5,      
                          alignItems:'center',
                          justifyContent:'center'}}>

          <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
          onPress = {() => {this.clubSubmitDone(true)}}>
      
          <Text style={{color:'#ffffff',fontSize:15}}>SUBMIT</Text>
         
          </TouchableHighlight>

          </LinearGradient>

          </View>

         </View>
         
       </Modal>
{/* //========================POP UP======================================// */}


{/* //========================POP UP DONE======================================// */}

      <Modal
         animationType="fade"
         transparent={false}
         visible={this.state.addClubDone}
         onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

         <View style={{height:"35%",
                     width:"70%",
                     flexDirection:'column',
                     backgroundColor:'#000000',
                     alignSelf:'center',
                     borderRadius:20,
                     position:'absolute',
                     top:"15%",
                     bottom:0,
                     left:"15%",
                     right:0}}>

        <Text style={{alignSelf:'center',
                      fontSize:15,
                      color:'#ffffff',
                      marginHorizontal:20,
                      marginTop:20,
                      }}>Club Added Successfully</Text>

       <Text style={{alignSelf:'center',
                   fontSize:13,
                   color:'#ffffff',
                   marginHorizontal:20,
                   marginTop:20,
                   }}>Your club has been added in the Datspot database.
                   Now you can go ahead and shout out about your events to the people</Text>

       <LinearGradient colors={['#FF41A8','#FFB847']}
                          style={{width:"50%",
                          borderRadius:20,
                          marginHorizontal:10, 
                          marginTop:20,     
                          alignItems:'center',
                          alignSelf:'center',
                          justifyContent:'center'}}>

          <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
          onPress = {() => {this.clubSubmitDone(false)}}>
      
          <Text style={{color:'#ffffff',fontSize:15}}>DONE</Text>
         
          </TouchableHighlight>

          </LinearGradient>

         </View>

  </Modal>

{/* //========================POP UP DONE======================================// */}

    </View>
        );
    }
} 

const styles = StyleSheet.create({

    textTitle:
    {
      color:'#ffffff',
      fontSize:22,
      alignSelf:'center',
      marginTop:20,
    },
    textSubhead:
    {
      color:'#ffffff',
      fontSize:16,
      textAlign:'center',
      marginTop:5,
      marginHorizontal:40
    },
    textHeading:
    {
      color:'#ffffff',
      fontSize:14,
      marginHorizontal:20,
    },
    textEdittext:
    {
      color:'#000000',
      fontSize:13,
      marginHorizontal:10,
      width:'90%',
    },
    viewEdittext:
    {
      marginTop:5,
      marginBottom:15,
      marginHorizontal:20,
      borderRadius:10,
      justifyContent:'center',
      backgroundColor:'#ffffff',
      height:"6%"
    },
    buttonBlack:
    {
      width: "95%",
      height: height(5),
      backgroundColor:'#000000',
      borderRadius:20,
      marginVertical:2,
      marginHorizontal:1
    },
    textPopUpHeading:
    {
      color:'#ffffff',
      fontSize:14,
      marginHorizontal:10,
    },
    textPopUpEdittext:
    {
      color:'#000000',
      fontSize:13,
      marginHorizontal:10,
      width:'90%',
    },
    viewPopUpEdittext:
    {
      marginTop:5,
      marginBottom:15,
      marginHorizontal:10,
      borderRadius:5,
      justifyContent:'center',
      backgroundColor:'#ffffff',
      height:"6%"
    },
    viewPopUpMessage:
    {
      marginTop:5,
      marginBottom:15,
      marginHorizontal:10,
      borderRadius:5,
      justifyContent:'center',
      backgroundColor:'#ffffff',
    },
  
  });