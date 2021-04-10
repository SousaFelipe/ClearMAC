import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 48,
        paddingHorizontal: 16,
        backgroundColor: themes.light.colorLight
    },

    searchInput: {
        justifyContent: 'center',
        height: 52,
        paddingHorizontal: 18,
        paddingVertical: 4,
        borderRadius: 26,
        backgroundColor: themes.light.colorWhite,
        shadowColor: "#000000",
        shadowOffset: {
            width:  0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2
    },

    logo: {
        width: 86,
        height: 86,
        marginTop: 86,
        alignSelf: 'center'
    },

    appName: {
        alignSelf: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: themes.light.colorTextSecondary
    },

    searchText: {
        marginStart: 14,
        fontSize: 18,
        color: themes.light.colorTextDisabled
    },

    footer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 8,
        fontSize: 14,
        color: themes.light.colorTextDisabled
    }

})



export default styles
