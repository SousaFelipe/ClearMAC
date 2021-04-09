import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: themes.light.colorWhite,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 16,
        color: themes.light.colorTextPrimary
    },

    subtitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: themes.light.colorTextSecondary,
        fontSize: 14
    }
})



export default styles
