import { StyleSheet } from "react-native";

import themes from "../../../themes";


const styles = StyleSheet.create({

    inputPIN: {
        flex: 0,
        alignContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 64,
        height: 64,
        marginHorizontal: 4,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: themes['light'].colorGray,
        fontSize: 32,
        textAlign: 'center',
        color: themes['light'].colorTextPrimary
    }

});



export default styles;
