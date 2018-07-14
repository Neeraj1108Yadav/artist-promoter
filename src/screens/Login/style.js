import { StyleSheet, Dimensions } from 'react-native';

let {height, width}= Dimensions.get('window');

export default StyleSheet.create({

    textInput:
    {
      width:'90%',
      color:'#000000',
      fontSize:14,
      marginRight:5,
      marginLeft:5,
      borderColor:'white',
   },
   buttonContainer:
   {
    width: "60%",
    height: height*0.065,
    borderRadius:200,
    overflow:"hidden",
    backgroundColor:"#fff",
    marginTop:10
   },
   button:
   {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  capsule: {
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:10,
    backgroundColor: '#ffffff',
    height:45,
    width:250,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegister:
  {
    color:'#ffffff',
    fontSize:18,
    marginTop:10,
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
  textForgetPass:
  {
    color:'#ffffff',
    fontSize:15,
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
  styleSocial:
  {
    marginTop:10,
    height:50,
    width:150,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textLoginWith:
  {
    color:'#ffffff',
    fontSize:15,
    marginTop:15,
    fontWeight:'bold',
    padding:5,
    alignSelf:'center'
  }

})