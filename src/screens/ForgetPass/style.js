import { StyleSheet, Dimensions } from 'react-native';

let {height, width}= Dimensions.get('window');

export default StyleSheet.create({

    capsule: 
    {
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
      textInput:
      {
          width:'90%',
          color:'#000000',
          fontSize:14,
          marginRight:5,
          marginLeft:5,
          borderColor:'white',
      },
      simpleText:
      {
        color:'#ffffff',
        fontSize:14,
        paddingVertical:5,
        marginRight:5
      },
      textLogin:
      {
        color:'#FF41A8',
        fontSize:14,
        paddingVertical:5
      },
      viewAccount:
      {
        height:60,
        width:null,
        alignItems:'center',
        justifyContent:'center',
        bottom:0,
        flexDirection:'row'
      },
      textReset:
      {
        color: '#ffffff',
        fontSize: 16,
        textAlign:'center'
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

})