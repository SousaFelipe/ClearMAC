import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import themes from "../../../../themes";



const unbordered: ViewStyle | TextStyle | ImageStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
};



const styles = StyleSheet.create({

    container: unbordered,

    borderedContainer: {
        ...unbordered,
        borderBottomWidth: 1,
        borderBottomColor: themes['light'].colorGray
    },

    copyContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 4
    },

    pppoeContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    passwordContent: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    mac: {
        alignSelf: 'flex-end',
        fontSize: 14,
        textAlign: 'right'
    }
})



export default styles;
