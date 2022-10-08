import { StyleSheet } from "react-native"

import themes from "../../../themes";



const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        backgroundColor: themes['light'].colorWhite
    },

    mainContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 6,
        marginEnd: 16,
        paddingHorizontal: 6
    },

    textContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    actionsContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    razao: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: themes['light'].colorTextPrimary
    },

    endereco: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: themes['light'].colorTextSecondary
    }

})



export default styles
