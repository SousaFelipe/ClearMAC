import { StyleSheet } from "react-native";

import themes from "./index";



const inputs = StyleSheet.create({

    default: {
        flex: 0,
        alignContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 52,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: themes['light'].colorGray,
        fontSize: 21,
        color: themes['light'].colorTextPrimary
    }
    
});



export default inputs;
