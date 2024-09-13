import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',        
        justifyContent: 'space-between',
        paddingVertical: 20, 
    },
    boxTop:{
        height:Dimensions.get("window").height/2.4,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    boxMid:{
        width: '100%',               
        justifyContent: 'center',    
        alignItems: 'center',               
    },
    boxBottom:{
        height:Dimensions.get("window").height/10,    
        alignItems:'center',
        marginBottom:100,
    },
    logo:{
        width:100,
        height:100,
    },
    text:{
        fontWeight:'bold',
        margin: 10,
        fontSize:18,             
        width: 400,
        alignItems:'center', 
        textAlign:'center',
        color: '#0000CD',
    },
    button:{
        width:240,                    
        height:50,                    
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:themas.colors.primary, 
        borderRadius:40,               
        shadowColor: "#000",           
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,                 
    },
    baseboard:{
        fontSize:16,
        color:'gray',
        fontWeight:'bold',
        textAlign: 'center', 
        paddingBottom: 500,
        
    },
    textbold:{
        fontSize:16,
        color:'gray',
        fontWeight:'bold',
        textAlign: 'center', 
        marginBottom: 5,
    }
});
