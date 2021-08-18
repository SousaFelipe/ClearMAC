import { StyleSheet } from 'react-native'

import themes from '../../../styles/themes'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },

    content: (status) => [
        {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            padding: 8
            borderRadius: 8,
        }
    ]
})



export default styles
