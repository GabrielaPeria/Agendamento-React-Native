import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({

    button:{
        width:350,        
        marginBottom: 30,
        height:60,
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
    textButton:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
    },
})