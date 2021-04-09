import React from 'react'

import {
    TouchableHighlight,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faRedoAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../ButtonIcon'

import styles from './styles'
import themes from '../../styles/themes'



function Cliente (props) {


    const cliente = props.cliente


    const getActionIcon = () => (
        <ButtonIcon
            onPress={ () => { console.log('MAC limpo!') } }>
            <FontAwesomeIcon
                size={ 18 }
                icon={ ((cliente.logins.length == 1) ? faRedoAlt : faArrowRight) }
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
