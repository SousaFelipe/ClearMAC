import React, { useState, useRef, useEffect } from "react";



import {

    ActivityIndicator,
    Alert,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    Text,
    View

} from "react-native";

import Toast from "react-native-toast-message";

import ButtonIcon from "../../molecules/ButtonIcon";
import Cliente from "../../molecules/Cliente";
import ModalCliente from "../../organisms/ModalCliente";

import { useAuth } from "../../../providers/auth.provider";

import { alert } from "../../../shared/alert";
import { request } from "../../../shared/api";
import utils from "../../../shared/utils";

import themes from "../../../themes";
import styles from "./styles";



export default function SearchPage({ navigation }: any) {



    const { csrfToken } = useAuth();

    const [inputSearchTimer, setInputSearchTimer] = useState<any>(null);
    const [clienteSlug, setClienteSlug] = useState<string>('');
    const [clientes, setClientes] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [clienteOnModal, setClienteOnModal] = useState<any>(null);

    
    let inputSearchRef = useRef<TextInput | null>(null);



    useEffect(() => {

        (Platform.OS === 'ios')
            ? inputSearchRef.current?.focus()
            : setTimeout(() => inputSearchRef.current?.focus(), 50);

    }, []);



    function handleChangeText(input: string) {
        setClienteSlug(input)

        if (input && input.length >= 3) {
            setLoading(true);
            clearTimeout(inputSearchTimer);
            
            setInputSearchTimer(
                setTimeout(() => {
                    request(csrfToken ?? '')
                        .get(`clientes/find/${ input }`)
                        .then(async (response) => {
                            const data = await response.data;

                            if (utils.http.isOK(response)) {
                                setClientes(data.clientes);
                            }
                            else {
                                alert(response.status.toString(), 'Erro inesperado!');
                            }

                            setLoading(false);
                        });
                    
                }, 1500)
            );
        }
        else {
            clearTimeout(inputSearchTimer);
            setLoading(false);
            setClientes([]);
        }
    }



    function handleModalVisibility(cliente: any) {
        if (cliente.logins && cliente.logins.length > 0) {
            setClienteOnModal(cliente);
            setModalVisible(true);
        }
    }


    function handleClearOrClose() {

        if (clienteSlug && clienteSlug.length > 0) {
            inputSearchRef.current?.clear();
            setClienteSlug('');
            setClientes([]);
        }
        else {
            navigation.goBack();
        }

        setLoading(false);
    }



    function renderFetchClientes() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={ styles.flatList }>
                    {clientes.map((cliente: any) => (
                        <Cliente
                            key={ cliente.id }
                            token={ csrfToken }
                            cliente={ cliente }
                            onPress={ handleModalVisibility } />
                    ))}
                </View>
            </ScrollView>
        )
    }



    function renderLoading() {
        return (
            <View style={ styles.loader }>
                <ActivityIndicator size="large" color={ themes['light'].colorBrand } />
            </View>
        );
    }



    return (
        <SafeAreaView style={{ ...styles.container }}>

            <StatusBar
                animated={true}
                backgroundColor={ themes['light'].colorWhite }
                barStyle='dark-content' />

            <Toast />

            <View style={ styles.formSection }>

                <ButtonIcon
                    onPress={ () => navigation.goBack() }
                    style={{ flex: 0.1 }}>

                    <Image
                        style={{ width: 24, height: 24 }}
                        source={ require('../../../../assets/icons/arrow-left.png') } />

                </ButtonIcon>

                <TextInput
                    ref={ inputSearchRef }
                    style={ styles.formInput }
                    autoFocus={ true }
                    placeholder="CPF ou nome do cliente..."
                    placeholderTextColor={ themes['light'].colorTextDisabled }
                    onChangeText={ (value) => handleChangeText(value) } />

                <ButtonIcon
                    onPress={ handleClearOrClose }
                    style={{ flex: 0.1 }} >

                    <Image
                        style={{ width: 24, height: 24 }}
                        source={ require('../../../../assets/icons/close.png') } />

                </ButtonIcon>

            </View>

            <ModalCliente
                token={ csrfToken }
                visible={ modalVisible }
                cliente={ clienteOnModal }
                handler={ setModalVisible } />
            
            { loading ? renderLoading() : renderFetchClientes() }

        </SafeAreaView >
    );
}
