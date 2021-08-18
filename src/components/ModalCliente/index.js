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


import { List } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../ButtonIcon'
import LoginCliente from './LoginCliente'

import styles from './styles'
import themes from '../../styles/themes'



export default (props) => {


    const contratos = (props.cliente && props.cliente.contratos) ? props.cliente.contratos : []
    const logins = (props.cliente && props.cliente.logins) ? props.cliente.logins : []


    const count = (data, name) => {

        if (!data || data.length <= 0) {
            return `NENHUM ${ name }`
        }

        const count = data.length        
        return `${ (count < 10) ? '0' : '' }${ count } ${ name }${ ((count > 1) ? 'S' : '') }`
    }


    const renderAccordions = () => (
        <List.AccordionGroup>
            <List.Accordion id="1" title={ count(contratos, 'CONTRATO') } style={ styles.accordion(false) }>
                <List.Item>
                    
                </List.Item>
            </List.Accordion>
            <List.Accordion id="2" title={ count(logins, 'LOGIN') } style={ styles.accordion(true) }>
                <List.Item style={ styles.item('P') }>
                    
                </List.Item>
            </List.Accordion>
        </List.AccordionGroup>
    )


    const renderContratos = () => (
        <View/>
    )


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
    
                    <Text style={{ ...styles.title, marginBottom: 20 }} numberOfLines={ 1 }>
                        { props.cliente ? props.cliente.razao : '' }
                    </Text>

                    { renderAccordions() }

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
