import React, { useState } from 'react'

import {
    ActivityIndicator,
    TouchableHighlight,
    Text,
    View
} from 'react-native'

import Toast from 'react-native-toast-message'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faRedoAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../ButtonIcon'

import styles from './styles'
import themes from '../../styles/themes'

import api from '../../utils/api'
import functions from '../../utils/functions'



function Cliente (props) {


    const cliente = props.cliente


    const [clearing, setClearing] = useState(false)


    const hasJustOne = () => (cliente.logins.length == 1)


    const handleClearMAC = () => {
        setClearing(true)

        const url = `provedor/logins/clear/${ cliente.logins[0].id }`

        new api().token(props.token).request().get(url).then(async (response) => {
            const data = await response.data

            if (functions.http.isOK(response)) {
                const success = (data.type == 'success')
                Toast.show({
                    type: success ? 'success' : 'error',
                    text1: success ? 'MAC removido!' : 'Erro!',
                    text2: data.message
                })
            }
            else Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Erro ao se comunicar com o servidor!'
            })

            setClearing(false)
        })
    }


    const getActionIcon = () => (clearing
        ? <ActivityIndicator size="small" color={ themes.light.colorBrand } />
        : <ButtonIcon onPress={ () => { if (hasJustOne()) handleClearMAC() } }>
            <FontAwesomeIcon
                size={ 18 }
                icon={ hasJustOne() ? faRedoAlt : faArrowRight }
                color={ getColorActionIcon() } />
         </ButtonIcon>
    )


    const getColorActionIcon = () => {
        return (cliente.logins && cliente.logins.length > 0)
            ? themes.light.colorTextDisabled
            : themes.light.colorGray
    }


    const getColorStatusIcon = () => {
        if (cliente.logins && cliente.logins.length > 0) {
            return (cliente.logins.length > 1)
                ? themes.light.colorBrand
                : (cliente.logins[0].online == 'S') ? themes.light.colorSuccess : themes.light.colorError
        }
        return themes.light.colorGray
    }


    return (
        <View
            key={ cliente.id }
            style={ styles.container }>

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <FontAwesomeIcon
                    size={ 48 }
                    icon={ faUserCircle }
                    color={ getColorStatusIcon() } />

                <TouchableHighlight
                    onPress={ () => props.onPress.call(this, cliente) }
                    style={{ flex: 1, ...styles.mainContent }}
                    underlayColor={ themes.light.colorLight }>

                    <View style={{ flex: 1, ...styles.textContent }}>
                        <Text style={ styles.razao } numberOfLines={ 1 }>{ cliente.razao }</Text>
                        <Text style={ styles.endereco }>{ cliente.endereco }</Text>
                    </View>

                </TouchableHighlight>

                <View style={ styles.actionsContent }>
                    { (cliente.logins.length <= 0) ? <></> : getActionIcon() }
                </View>                    

            </View>

        </View>
    )
}



export default Cliente
