import React, { useState } from  "react";

import {

    ActivityIndicator,
    Image,
    TouchableHighlight,
    Text,
    View

} from "react-native";

import Toast from "react-native-toast-message";

import ButtonIcon from "../ButtonIcon";

import { useAuth } from "../../../providers/auth.provider";

import styles from "./styles"
import themes from "../../../themes";

import { request } from "../../../shared/api";
import utils from "../../../shared/utils";



export default function Cliente(props: any) {


    const cliente = props.cliente;

    const { csrfToken } = useAuth();

    const [clearing, setClearing] = useState<boolean>(false);



    const hasJustOne = () => (cliente.logins.length == 1);



    function handleClearMAC() {
        setClearing(true);

        request(csrfToken ?? '')
            .get(`provedor/logins/clear/${ cliente.logins[0].id }`)
            .then(async (response: any) => {
                const data = await response.data

                if (utils.http.isOK(response)) {
                    const success = (data.type == 'success');
                    Toast.show({
                        type: success ? 'success' : 'error',
                        text1: success ? 'MAC removido!' : 'Erro!',
                        text2: data.message
                    });
                }
                else Toast.show({
                    type: 'error',
                    text1: 'Erro!',
                    text2: 'Erro ao se comunicar com o servidor!'
                });

                setClearing(false);
            });
    }


    function getActionIcon() {
        return (
            clearing
                ? <ActivityIndicator size="small" color={ themes.light.colorBrand } />
                : <ButtonIcon onPress={ () => { if (hasJustOne()) handleClearMAC() } }>

                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            hasJustOne()
                                ? require('../../../../assets/icons/redo.png')
                                : require('../../../../assets/icons/arrow-right.png')
                        }/>

                </ButtonIcon>
        );
    }



    function getStatusIcon() {
        if (cliente.logins && cliente.logins.length > 0) {
            return (cliente.logins.length > 1)
                ? require('../../../../assets/icons/user-default.png')
                : (cliente.logins[0].online == 'S')
                    ? require('../../../../assets/icons/user-success.png')
                    : require('../../../../assets/icons/user-error.png');
        }
        return require('../../../../assets/icons/user-none.png');
    }


    return (
        <View
            key={ cliente.id }
            style={ styles.container }>

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <Image
                    style={{ width: 48, height: 48 }}
                    source={ getStatusIcon() }/>

                <TouchableHighlight
                    onPress={ () => {
                        if (props.onPress) {
                            props.onPress(cliente);
                        }
                    }}
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
