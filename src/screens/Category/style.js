import { StyleSheet, Dimensions } from 'react-native';

let {height, width}= Dimensions.get('window');

export default StyleSheet.create({

    imageStyle:
    {
        height:85,
        width:85,
        alignItems:'center',
        justifyContent:'center'
    },
    textCategory:
    {
        color:'#ffffff',
        fontSize:14,
        fontWeight:'bold',
        alignSelf:'center'
    },
    textHeading:
    {
        color:'#ffffff',
        fontSize:15,
        alignSelf:'center',
        marginTop:20
    },
    viewCategory:
    {
        marginTop:10,
        padding:10,
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center',
        flexDirection:'row'
    }

})