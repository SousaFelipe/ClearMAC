import React, { useEffect, useState } from "react";

import { ColorValue, Image, Pressable, Text, View } from "react-native";

import * as Clipboard from "expo-clipboard";

import Toast from "react-native-toast-message";

import { useAuth } from "../../../../providers/auth.provider";

import { request } from "../../../../shared/api";
import utils from "../../../../shared/utils";

import themes from "../../../../themes";
import styles from "./styles";



export default function LoginCliente(props: any) {



    const { csrfToken } = useAuth();



    const [clearing, setClearing] = useState<boolean>(false);
    const [textMAC, setTextMAC] = useState<string>('');
    const [login, setLogin] = useState<any>({});
    const [mac, setMAC] = useState<string>('');

    const [copyPppColor, setCopyPppColor] = useState<ColorValue[]>(['transparent', themes['light'].colorTextPrimary]);
    const [copyPasColor, setCopyPasColor] = useState<ColorValue[]>(['transparent', themes['light'].colorTextDisabled]);
    const [clenMacColor, setClenMacColor] = useState<ColorValue[]>(['transparent', themes['light'].colorTextDisabled]);



    useEffect(() => {

        setLogin(props.login);
        setMAC(props.login.mac);

    }, []);



    useEffect(() => {
        setTextMAC(clearing ? 'EXCLUINDO MAC...' : (mac || 'Clear!'));
    });



    const isOnline = () => (login && login.online == 'S');



    async function handleCopyPPPoE() {
        await Clipboard.setStringAsync(login.login);

        let copiedPPPoE = await Clipboard.getStringAsync();

        if (copiedPPPoE == login.login) {
            Toast.show({
                text1: 'Copiado!',
                text2: login.login
            });
        }
    }



    async function handleCopySenha() {
        await Clipboard.setStringAsync(login.senha);
        
        let copiedPass = await Clipboard.getStringAsync();

        if (copiedPass == login.senha) {
            Toast.show({
                text1: 'Copiado!',
                text2: login.senha
            });
        }
    }



    function handleClearMAC() {
        setClearing(true);

        request(csrfToken ?? '')
            .get(`provedor/logins/clear/${ login.id }`)
            .then(async (response) => {
                const data = await response.data;

                if (utils.http.isOK(response)) {
                    const success = (data.type == 'success');

                    Toast.show({
                        type: success ? 'success' : 'error',
                        text1: success ? 'MAC removido!' : 'Erro!',
                        text2: data.message
                    });

                    if (success) {
                        setMAC('Clear!');
                    }
                }
                else Toast.show({
                    type: 'error',
                    text1: 'Erro!',
                    text2: 'Não foi possível se comunicar com o servidor!'
                });

                setClearing(false);
            });
    }



    return (
        <View style={ props.last ? styles.container : styles.borderedContainer }>

            <View style={ styles.pppoeContent }>

                <Image style={{
                        width: 16,
                        height: 16,
                        margin: 6
                    }}
                    source={
                        isOnline()
                            ? require('../../../../../assets/icons/online.png')
                            : require('../../../../../assets/icons/offline.png')
                    }/>

                <Pressable
                    style={{
                        backgroundColor: copyPppColor[0],
                        ...styles.copyContent
                    }}
                    delayLongPress={2000}
                    onLongPress={ handleCopyPPPoE }
                    onPressIn={ () => setCopyPppColor([themes['light'].colorBrand, 'white']) }
                    onPressOut={ () => setCopyPppColor(['transparent', themes['light'].colorTextPrimary]) }>
                    <Text style={{ fontSize: 16, color: copyPppColor[1] }} numberOfLines={ 1 }>{ login.login }</Text>
                </Pressable>

            </View>

            <View style={ styles.pppoeContent }>

                <Image style={{
                        width: 16,
                        height: 16,
                        margin: 6
                    }}
                    source={ require('../../../../../assets/icons/lock.png') }/>

                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                    <Pressable
                        style={{
                            backgroundColor: copyPasColor[0],
                            ...styles.copyContent
                        }}
                        delayLongPress={2000}
                        onLongPress={ handleCopySenha }
                        onPressIn={ () => setCopyPasColor([themes['light'].colorBrand, 'white']) }
                        onPressOut={ () => setCopyPasColor(['transparent', themes['light'].colorTextDisabled]) }>
                        <Text style={{ color: copyPasColor[1] }} numberOfLines={ 1 }>{ login.senha }</Text>
                    </Pressable>

                    <Pressable
                        style={{
                            backgroundColor: clenMacColor[0],
                            ...styles.copyContent
                        }}
                        delayLongPress={2000}
                        onLongPress={ handleClearMAC }
                        onPressIn={ () => setClenMacColor([themes['light'].colorBrand, 'white']) }
                        onPressOut={ () => setClenMacColor(['transparent', themes['light'].colorTextDisabled]) }>
                        <Text style={{ color: clenMacColor[1], ...styles.mac }} numberOfLines={ 1 }>{ textMAC }</Text>
                    </Pressable>

                </View>

            </View>

        </View>
    )
}
