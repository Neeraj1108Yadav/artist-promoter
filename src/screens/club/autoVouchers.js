import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView} from 'react-native';
import {Header,Slider} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

export default class autoVouchers extends Component {

    functionImage()
    {
        <Image style={{justifyContent:'center'}}
               source={require('./imagesClub/notification.png')}/>
    }

    constructor(props)
    {
        super(props);
        this.state= {
            value:0,
        };
    }


    render()
    {

        let data = [{
            value: 'All',
          }, {
            value: 'Food',
          }, {
            value: 'Drink',
          }];

        return(
            <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

            <Header
              backgroundColor='#000000'
              outerContainerStyles={{borderBottomWidth:0}}
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'ADD AUTO-VOUCHER', style: {fontSize:16,
                                                                   color:'#ffffff',
                                                                   fontWeight:'bold'} }}
              rightComponent={this.functionImage()}/>

              <View style={{marginHorizontal:20,flexDirection:'column'}}>
               
                <Text style={styles.textHeading}>Select discounted items</Text>
                <Dropdown
                    label= ""
                    data={data}
                    baseColor={'#000000'}
                    itemColor={'#585858'}
                    selectedItemColor={'#000000'}
                    containerStyle={styles.dropdownView}
                    pickerStyle={styles.pickerView}
                    overlayStyle={styles.overlayView}
                    dropdownPosition={0}
                    dropdownOffset={{top:10,left:0}}/>

               <Text style={styles.textHeading}>How much discount are you offering?</Text>
               <View style={styles.sliderView}>

                <Text style={{fontSize:14,color:'#585858'}}
                      flexBasis="40%"/>

                 <Slider
                    value={this.state.value}
                    onValueChange={(value) => this.setState({value})} 
                    flexBasis="60%"/>
               
               </View>
                    
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    textHeading:
    {
        color:'#ffffff',
        fontSize:15,
        marginTop:15,
        marginBottom:5
    },
    dropdownView:
    {
        backgroundColor:'#ffffff',
        borderRadius:10,
        paddingHorizontal:10,
        justifyContent:'center',
        height:"23%"
    },
    sliderView:
    {
        backgroundColor:'#ffffff',
        borderRadius:10,
        paddingHorizontal:10,
        justifyContent:'center',
        height:"23%",
        flexDirection:'row'
    },
    overlayView:
    {
        marginTop:20,
        marginHorizontal:15
    }

});


