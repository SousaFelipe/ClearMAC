import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },

    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 20,
        borderRadius: 20,
        backgroundColor: themes.light.colorWhite,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3
    },

    title: {
        marginHorizontal: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: themes.light.colorTextPrimary
    },

    subtitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 14,
        color: themes.light.colorTextSecondary,
    },

    button: ({pressed}) => [
        {
            backgroundColor: pressed ? themes.light.colorLight : 'transparent',
            marginEnd: 8,
            marginBottom: 8,
            borderRadius: 12,
            paddingVertical: 8,
            paddingHorizontal: 20,
        }
    ],

    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.light.colorBrand
    }
})



export default styles
