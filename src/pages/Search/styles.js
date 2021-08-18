import { StyleSheet } from 'react-native'

import themes from '../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: themes.light.colorLight
    },

    formSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        paddingStart: 16,
        paddingEnd: 6,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: themes.light.colorGray,
        backgroundColor: themes.light.colorWhite
    },

    formInput: {
        flex: 1,
        maxWidth: 'auto',
        color: themes.light.colorTextPrimary,
        marginEnd: 16,
        fontSize: 21,
    },

    flatList: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingVertical: 8
    },

    loader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})



export default styles
