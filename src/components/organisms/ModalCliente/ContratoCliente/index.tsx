import React, { useEffect, useState } from "react";

import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import Toast from "react-native-toast-message";

import { useAuth } from "../../../../providers/auth.provider";

import { request } from "../../../../shared/api";
import utils from "../../../../shared/utils";

import themes from "../../../../themes";
import styles from "./styles";



export default function ContratoCliente(props: any) {



    const { csrfToken } = useAuth();


    const [contrato, setContrato] = useState<any>(null);
    const [activating, setIsActivating] = useState<boolean>(false);



    useEffect(() => {

        setContrato(props.contrato);

    }, []);



    function getIconByStatus() {
        return (contrato?.status == 'A')
            ? require('../../../../../assets/icons/online.png')
            : (contrato?.status_internet == 'FA')
                ? require('../../../../../assets/icons/atrasado.png')
                : (contrato?.status_internet == 'CM' || contrato?.status_internet == 'CA')
                    ? require('../../../../../assets/icons/bloqueado.png')
                    : require('../../../../../assets/icons/desativado.png');
    }



    function getColorByStatus() : string {
        return (contrato?.status == 'P')
            ? themes['light'].colorBrand
            : themes['light'].colorLight
    }



    function getButtonByStatus() {
        return (contrato?.status == 'P')
            ? 'ATIVAR CONTRATO'
            : (contrato?.status_internet == 'FA')
                ? 'FINANCEIRO EM ATRASO'
                : (contrato?.status_internet == 'CM' || contrato?.status_internet == 'CA')
                    ? 'BLOQUEADO'
                    : (contrato?.status_internet == 'A')
                        ? 'ATIVO'
                        : 'DESATIVADO';
    }



    function handleAtivateContrato() {
        if (contrato && contrato.status == 'P') {
            setIsActivating(true);

            request(csrfToken ?? '')
                .get(`contratos/ativar/${ contrato.id }`)
                .then(async (response) => {
                    const data = await response.data;

                    if (utils.http.isOK(response)) {
                        const success = (data.type == 'success' || data.tipo == 'sucesso');

                        Toast.show({
                            type: success ? 'success' : 'error',
                            text1: success ? 'Ativado!' : 'Erro!',
                            text2: data.message
                        });

                        if (success) {
                            let newContrato = contrato;
                            newContrato.status = 'A';
                            setContrato(newContrato);
                        }
                    }
                    else Toast.show({
                        type: 'error',
                        text1: 'Erro!',
                        text2: 'Não foi possível se comunicar com o servidor!'
                    });

                    setIsActivating(false);
                });
        }
    }



    return (
        <View style={ props.last ? styles.container : styles.borderedContainer }>
            <View style={ styles.contratoContent }>

                <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5
                    }}>

                    <Image style={{
                            width: 24,
                            height: 24
                        }}
                        source={ getIconByStatus() }/>

                    <Text style={{
                            marginLeft: 8,
                            color: themes['light'].colorTextPrimary,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }} numberOfLines={ 1 }>

                        { contrato?.plano[ props.index ].nome.replace('AGILITY', '') }

                    </Text>

                </View>

                <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        marginHorizontal: 8,
                        backgroundColor: getColorByStatus(),
                        borderRadius: 8
                    }}
                    onPress={ handleAtivateContrato }>
                    <Text style={{
                            fontSize: 16,
                            color: themes['light'].colorWhite
                        }}>
                        {
                            activating
                                ? <ActivityIndicator size='small' color='#FFFFFF'/>
                                : getButtonByStatus()
                        }
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
