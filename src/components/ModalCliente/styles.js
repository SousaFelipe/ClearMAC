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

    accordion: (bordered) => [
        {
            marginStart: 20,
            marginEnd: 20,
            borderTopWidth: bordered ? 1 : 0,
            borderTopColor: themes.light.colorGray
        }
    ],

    item: (status) => [
        {
            marginHorizontal: 22,
            marginVertical: 2,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: (status == 'P') ? '#FFF000' : (status == 'A') ? '#00FF00' : '#90A4AE',
            backgroundColor: (status == 'P') ? '#FFF8E1' : (status == 'A') ? '#F1F8E9' : '#ECEFF1',
            color: themes.light.colorTextPrimary
        }
    ],

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
