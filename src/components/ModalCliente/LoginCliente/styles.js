import { StyleSheet } from 'react-native'

import themes from '../../../styles/themes'



const unbordered = {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
}



const styles = StyleSheet.create({

    container: unbordered,

    borderedContainer: {
        ...unbordered,
        borderBottomWidth: 1,
        borderBottomColor: themes.light.colorGray
    },

    copyContent: ({ pressed }) => [
        {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
        },
        {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 4,
            paddingVertical: 4
        }
    ],

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
        color: themes.light.colorTextDisabled,
        textAlign: 'right'
    }
})



export default styles
