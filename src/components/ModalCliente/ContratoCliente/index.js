import React, { useEffect, useState } from 'react'

import {
    Clipboard,
    Pressable,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faTimesCircle, faRedoAlt, faLock } from '@fortawesome/free-solid-svg-icons'

import themes from '../../../styles/themes'
import styles from './styles'

import api from '../../../utils/api'
import functions from '../../../utils/functions'



export default (props) => {



    const [contrato, setContrato] = useState({})



    useEffect(() => {

        setContrato(props.contrato)

    }, [])


    useEffect(() => {
        setTextMAC()
    })



    const isPre = () => (contrato && contrato.online == 'P')

    const isAtivo = () => (contrato && contrato.online == 'A')

    const isInativo = () => (contrato && contrato.online == 'I')




    const status = () => { 

        const status = {
            'P': () => ('Pré-contrato'),
            'A': () => ('Ativo'),
            'I': () => ('Inativo'),
            'D': () => ('Sem status')
        }

        return (status[contrato.status] || status['D'])()
    }



    return (
        <View>

        </View>
    )
}
