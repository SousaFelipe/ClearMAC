import React, { useState } from "react";

import {

    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View

} from "react-native";

import Toast from "react-native-toast-message";

import Collapsible from "../Collapsible";
import LoginCliente from "./LoginCliente";

import styles from "./styles";
import themes from "../../../themes";
import ContratoCliente from "./ContratoCliente";



export default (props: any) => {




    const contratos = (props.cliente && props.cliente.contratos)
        ? props.cliente.contratos
        : [];

    const logins = (props.cliente && props.cliente.logins)
        ? props.cliente.logins
        : [];



    const [isContratoCollapsed, setIsContratoCollapsed] = useState<boolean>(true);
    const [isLoginCollapsed, setIsLoginCollapsed] = useState<boolean>(true);
    


    function renderCountContratos() {
        const count = contratos.length;
        return `${ (count < 10) ? '0' : '' }${ count } CONTRATO${ ((count > 1) ? 'S' : '') }`;
    }
    


    function renderCountLogins() {
        const count = logins.length;
        return `${ (count < 10) ? '0' : '' }${ count } LOGIN${ ((count > 1) ? 'S' : '') }`;
    }



    function renderContratos() {
        return (<>
            <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginTop: 16,
                    backgroundColor: isContratoCollapsed ? 'transparent' : themes['light'].colorLight
                }}
                onPress={ () => setIsContratoCollapsed(!isContratoCollapsed) }>

                <Text style={ styles.subtitle }>
                    { renderCountContratos() }
                </Text>

                <Image style={{
                        width: 24,
                        height: 24
                    }}
                    source={
                        isContratoCollapsed
                            ? require('../../../../assets/icons/expand.png')
                            : require('../../../../assets/icons/collapse.png')
                    }/>

            </TouchableOpacity>

            <Collapsible collapsed={ isContratoCollapsed } maxHeight={116}>
                <ScrollView>
                    {contratos.map((contrato: any, index: number) => (
                        <ContratoCliente
                            key={ contrato.id }
                            token={ props.token }
                            contrato={ contrato }
                            index={ index }
                            last={ (index == contratos.length - 1) } />
                    ))}
                </ScrollView>
            </Collapsible>
        </>);
    }



    function renderLogins() {
        return (<>
            <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: isLoginCollapsed ? 'transparent' : themes['light'].colorLight,
                    borderTopWidth: 1,
                    borderTopColor: themes['light'].colorLight
                }}
                onPress={ () => setIsLoginCollapsed(!isLoginCollapsed) }>

                <Text style={ styles.subtitle }>
                    { renderCountLogins() }
                </Text>

                <Image style={{
                        width: 24,
                        height: 24
                    }}
                    source={
                        isLoginCollapsed
                            ? require('../../../../assets/icons/expand.png')
                            : require('../../../../assets/icons/collapse.png')
                    }/>

            </TouchableOpacity>

            <Collapsible collapsed={ isLoginCollapsed } maxHeight={74}>
                <ScrollView>
                    {logins.map((login: any, index: number) => (
                        <LoginCliente
                            key={ login.id }
                            token={ props.token }
                            login={ login }
                            last={ (index == logins.length - 1) } />
                    ))}
                </ScrollView>
            </Collapsible>
        </>);
    }

    

    return (
        <Modal
            animationType="fade"
            transparent={ true }
            visible={ props.visible }
            onRequestClose={ () => {
                if (props.handler) {
                    props.handler(!props.visible);
                }
            }}>
            <View style={ styles.container }>
                
                <Toast />

                <View style={ styles.content }>
    
                    <Text style={{ ...styles.title }} numberOfLines={ 1 }>
                        { props.cliente ? props.cliente.razao : '' }
                    </Text>

                    { renderContratos() }
                    { renderLogins()    }

                    <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 16
                        }}>
                        <TouchableOpacity style={ styles.button }
                            onPress={ () => {
                                if (props.handler) {
                                    props.handler(false);
                                } 
                            }}>
                            <Text style={ styles.btnText }>FECHAR</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </View>
        </Modal>
    )
}
