import React from 'react'

import {
    ActivityIndicator,
    Modal,
    Pressable,
    ScrollView,
    Text,
    View
} from 'react-native'

import Toast from 'react-native-toast-message'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../ButtonIcon'
import LoginCliente from './LoginCliente'

import styles from './styles'
import themes from '../../styles/themes'



export default (props) => {


    const logins = (props.cliente && props.cliente.logins) ? props.cliente.logins : []


    const renderContratos = () => {
        return (
            <ButtonIcon>
                { `01 CONTRATO ATIVO` }
                <FontAwesomeIcon
                    size={ 18 }
                    icon={ faExpand }
                    color={ themes.light.colorTextSecondary } />
            </ButtonIcon>
        )
    }
    

    const renderCount = () => {
        const count = logins.length
        return `${ (count < 10) ? '0' : '' }${ count } LOGIN${ ((count > 1) ? 'S' : '') }`
    }


    const renderLogins = () => (
        <ScrollView style={{ paddingHorizontal: 20 }}>
            {logins.map((login, index) => (
                <LoginCliente key={ login.id } token={ props.token } login={ login } last={ (index == logins.length - 1) } />
            ))}
        </ScrollView>
    )


    return (
        <Modal
            animationType="fade"
            transparent={ true }
            visible={ props.visible }
            onRequestClose={ () => props.handler.call(this, !props.visible) }>
            <View style={ styles.container }>
                
                <Toast ref={ ref => Toast.setRef(ref) } />

                <View style={ styles.content }>
    
                    <Text style={{ ...styles.title }} numberOfLines={ 1 }>
                        { props.cliente ? props.cliente.razao : '' }
                    </Text>
                    <Text style={{ ...styles.subtitle, marginBottom: 16 }}>
                        { renderCount() }
                    </Text>

                    { renderLogins() }

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16 }}>
                        <Pressable style={ styles.button } onPress={ () => props.handler.call(this, false) }>
                            <Text style={ styles.btnText }>FECHAR</Text>
                        </Pressable>
                    </View>
    
                </View>
            </View>
        </Modal>
    )
}
