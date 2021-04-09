import { StyleSheet } from 'react-native'

import themes from './themes'



const flexRow = {
    flex:               1,
    flexDirection:      'row',
    backgroundColor:    themes.light.colorLight
}

const flexColumn = {
    flex:               1,
    flexDirection:      'column',
    paddingHorizontal:  24,
    backgroundColor:    themes.light.colorLight
}



const containers = StyleSheet.create({

    row: {
        ...flexRow,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    rowCenter: {
        ...flexRow,
        justifyContent: 'center',
        alignItems: 'center'
    },

    rowCenterStretch: {
        ...flexRow,
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    column: {
        ...flexColumn,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    columnCenter: {
        ...flexColumn,
        justifyContent: 'center',
        alignItems: 'center'
    },

    columnStretch: {
        ...flexColumn,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
})



export default containers
