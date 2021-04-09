import React, { useState, useRef, useEffect } from 'react'

import {
    ActivityIndicator,
    Alert,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../../components/ButtonIcon'
import Cliente from '../../components/Cliente'
import ModalCliente from '../../components/ModalCliente'

import styles from './styles'
import themes from '../../styles/themes'

import api from '../../utils/api'
import functions from '../../utils/functions'



const alert = (title, mensage) => {
    Alert.alert(
        title,
        mensage,
        [{ text: "OK" }]
    )
}



export default function Search({ navigation }) {


    const [inputSearchTimer, setInputSearchTimer] = useState(null)
    const [clienteSlug, setClienteSlug] = useState('')
    const [clientes, setClientes] = useState([])
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')

    const [modalVisible, setModalVisible] = useState(false)
    const [clienteOnModal, setClienteOnModal] = useState(null)

    
    const inputSearchRef = useRef()


    useEffect(() => {

        (Platform.OS === 'ios')
            ? inputSearchRef.current.focus()
            : setTimeout(() => inputSearchRef.current.focus(), 50)
        
        new api().root().request().get('csrf').then(async (response) => {
            const data = await response.data

            if (functions.http.isOK(response)) {
                setToken(data.csrf_token)
            }
            else {
                alert(response.status.toString(), 'Erro inesperado!')
            }
        })

    }, [])


    const handleChangeText = (input) => {
        setClienteSlug(input)

        if (input && input.length >= 3) {
            setLoading(true)
            clearTimeout(inputSearchTimer)
            
            setInputSearchTimer(
                setTimeout(() => {
                    const url = `clientes/find/${ input }`

                    new api().token(token).request().get(url).then(async (response) => {
                        const data = await response.data

                        if (functions.http.isOK(response)) {
                            setClientes(data.clientes)
                        }
                        else {
                            alert(response.status.toString(), 'Erro inesperado!')
                        }

                        setLoading(false)
                    })
                    
                }, 1500)
            )
        }
        else {
            clearTimeout(inputSearchTimer)
            setLoading(false)
            setClientes([])
        }
    }


    const handleModalVisibility = (cliente) =>  {
        if (cliente.logins && cliente.logins.length > 0) {
            setClienteOnModal(cliente)
            setModalVisible(true)
        }
    }


    const handleClearOrClose = () => {

        if (clienteSlug && clienteSlug.length > 0) {
            inputSearchRef.current.clear()
            setClienteSlug('')
            setClientes([])
        }
        else {
            navigation.goBack()
        }

        setLoading(false)
    }


    const renderFetchClientes = () => {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={ styles.flatList }>
                    {clientes.map((cliente) => (
                        <Cliente
                            key={ cliente.id }
                            cliente={ cliente }
                            onPress={ handleModalVisibility } />
                    ))}
                </View>
            </ScrollView>
        )
    }


    const renderLoading = () => (
        <View style={ styles.loader }>
            <ActivityIndicator size="large" color={ themes.light.colorBrand } />
        </View>
    )


    return (
        <SafeAreaView style={{ ...styles.container }}>

            <StatusBar
                animated={true}
                backgroundColor={ themes.light.colorWhite }
                barStyle='dark-content' />

            <View style={ styles.formSection }>

                <ButtonIcon
                    onPress={ () => navigation.goBack() }
                    style={{ flex: 0.1 }}>
                    <FontAwesomeIcon
                        size={ 18 }
                        icon={ faArrowLeft }
                        color={ themes.light.colorBrand } />
                </ButtonIcon>

                <TextInput
                    ref={ inputSearchRef }
                    style={ styles.formInput }
                    autoFocus={ true }
                    placeholder="CPF ou nome do cliente..."
                    placeholderTextColor={ themes.light.colorTextDisabled }
                    onChangeText={ (value) => handleChangeText(value) } />

                <ButtonIcon
                    onPress={ handleClearOrClose }
                    style={{ flex: 0.1 }} >
                    <FontAwesomeIcon
                        size={ 18 }
                        icon={ faTimes }
                        color={ themes.light.colorTextDisabled } />
                </ButtonIcon>

            </View>

            <ModalCliente
                token={ token }
                visible={ modalVisible }
                cliente={ clienteOnModal }
                handler={ setModalVisible } />
            
            { loading ? renderLoading() : renderFetchClientes() }

        </SafeAreaView >
    )
}
