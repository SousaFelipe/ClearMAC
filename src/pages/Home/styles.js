import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
<<<<<<< HEAD
        alignItems: 'stretch',
        paddingTop: 48,
=======
        justifyContent: 'center',
        alignItems: 'stretch',
>>>>>>> 1384d75 (Clena MAC system ok)
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

<<<<<<< HEAD
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

=======
>>>>>>> 1384d75 (Clena MAC system ok)
    searchText: {
        marginStart: 14,
        fontSize: 18,
        color: themes.light.colorTextDisabled
<<<<<<< HEAD
    },

    footer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 8,
        fontSize: 14,
        color: themes.light.colorTextDisabled
=======
>>>>>>> 1384d75 (Clena MAC system ok)
    }

})



export default styles
