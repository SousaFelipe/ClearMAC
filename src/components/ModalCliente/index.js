import React from 'react'

import {
    ActivityIndicator,
    Modal,
    Text,
    View
} from 'react-native'

import Toast from 'react-native-toast-message'

import LoginCliente from './LoginCliente'

import styles from './styles'
import themes from '../../styles/themes'



export default (props) => {


    const logins = (props.cliente && props.cliente.logins) ? props.cliente.logins : []
    

    const renderCount = () => {
        const count = logins.length
        return `${ (count < 10) ? '0' : '' }${ count } LOGIN${ ((count > 1) ? 'S' : '') }`
    }


    const renderLogins = () => (
        logins.map((login, index ) => <LoginCliente token={ props.token } key={ login.id } login={ login } last={ (index == logins.length - 1) } />)
    )


    return (
        <Modal
            animationType="fade"
            transparent={ true }
            visible={ props.visible }
            onRequestClose={ () => props.handler.call(this, !props.visible) }>
            <View style={ styles.container }>
                <View style={ styles.content }>

                    <Toast ref={ ref => Toast.setRef(ref) } />
    
                    <Text style={{ ...styles.title, marginTop: 16 }} numberOfLines={ 1 }>
                        { props.cliente ? props.cliente.razao : '' }
                    </Text>
                    <Text style={{ ...styles.subtitle, marginBottom: 16 }}>
                        { renderCount() }
                    </Text>

                    { renderLogins() }
    
                </View>
            </View>
        </Modal>
    )
}
