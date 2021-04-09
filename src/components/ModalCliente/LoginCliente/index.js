import React, { useEffect, useState } from 'react'

import {
    Clipboard,
    Pressable,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faTimesCircle, faRedoAlt, faLock } from '@fortawesome/free-solid-svg-icons'

import Toast from 'react-native-toast-message'

import themes from '../../../styles/themes'
import styles from './styles'

import api from '../../../utils/api'
import functions from '../../../utils/functions'



export default (props) => {


    const [login, setLogin] = useState({})
    const [mac, setMAC] = useState('')


    useEffect(() => {

        setLogin(props.login)
        setMAC(props.login.mac)

    }, [])


    const handleCopyPPPoE = async () => {
        Clipboard.setString(login.login)

        let copiedPPPoE = await Clipboard.getString()

        if (copiedPPPoE == login.login) {
            Toast.show({
                text1: 'Copiado!',
                text2: login.login
            })
        }
    }


    const handleCopySenha = async () => {
        Clipboard.setString(login.senha)
        
        let copiedPass = await Clipboard.getString()

        if (copiedPass == login.senha) {
            Toast.show({
                text1: 'Copiado!',
                text2: login.senha
            })
        }
    }


    const handleClearMAC = () => {
        const url = `provedor/logins/clear/${ login.id }`

        new api().token(props.token).request().get(url).then(async (response) => {
            const data = await response.data

            if (functions.http.isOK(response)) {
                const success = (data.type == 'success')

                Toast.show({
                    type: success ? 'success' : 'error',
                    text1: success ? 'MAC removido!' : 'Erro!',
                    text2: data.message
                })

                if (success) {
                    setMAC('Clear!')
                }
            }
            else {
                Toast.show({
                    type: 'error',
                    text1: 'Erro!',
                    text2: 'Erro ao se comunicar com o servidor!'
                })
            }
        })
    }


    const isOnline = () => (login && login.online == 'S')


    const hasMAC = () => (login && login.mac && login.mac.length == 17)


    return (
        
        <View style={ props.last ? styles.container : styles.borderedContainer }>

            <View style={ styles.pppoeContent }>

                <FontAwesomeIcon
                    size={ 16 }
                    style={{ marginEnd: 6 }}
                    icon={ isOnline() ? faCheckCircle : faTimesCircle }
                    color={ isOnline() ? themes.light.colorSuccess : themes.light.colorError } />

                <Pressable
                    style={ styles.copyContent }
                    delayLongPress={2000}
                    onLongPress={ handleCopyPPPoE }>
                    <Text style={{ fontSize: 16, color: themes.light.colorTextPrimary }} numberOfLines={ 1 }>{ login.login }</Text>
                </Pressable>

            </View>

            <View style={ styles.pppoeContent }>

                <FontAwesomeIcon
                    size={ 16 }
                    style={{ marginEnd: 6 }}
                    icon={ faLock }
                    color={ themes.light.colorTextSecondary } />

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Pressable
                        style={ styles.copyContent }
                        delayLongPress={2000}
                        onLongPress={ handleCopySenha }>
                        <Text style={{ color: themes.light.colorTextSecondary }} numberOfLines={ 1 }>{ login.senha }</Text>
                    </Pressable>

                    <Pressable
                        style={ styles.copyContent }
                        delayLongPress={2000}
                        onLongPress={ handleClearMAC }>
                        <Text style={ styles.mac } numberOfLines={ 1 }>{ (mac || 'Clear!') }</Text>
                    </Pressable>

                </View>

            </View>

        </View>
    )
}
