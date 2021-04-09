import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
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

    searchText: {
        marginStart: 14,
        fontSize: 18,
        color: themes.light.colorTextDisabled
    }

})



export default styles
