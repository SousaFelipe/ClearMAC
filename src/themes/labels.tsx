import { StyleSheet } from "react-native";

import themes from "./index";



const labels = StyleSheet.create({

    primary: {
        fontSize: 14,
        color: themes['light'].colorTextPrimary
    },

    primarySmall: {
        fontSize: 10,
        color: themes['light'].colorTextPrimary
    },

    primaryLarge: {
        fontSize: 32,
        color: themes['light'].colorTextPrimary
    },
    
});



export default labels;
