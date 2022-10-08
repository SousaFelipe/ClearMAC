import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, TextInput, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

import { useAuth } from "../../../providers/auth.provider";
import { alert } from "../../../shared/alert";
import themes from "../../../themes";
import labels from "../../../themes/labels";

import styles from "./styles";



export default function AuthPage() {



    const {

        useSafeMode,
        signIn,
        toggleSafeMode
    
    } = useAuth();



    let pinRefs = [
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null)
    ];

    let pinVals = [
        '',
        '',
        '',
        ''
    ];



    useEffect(() => {

        pinRefs[0].current?.focus();

    }, []);



    async function shouldBeSignIn() {
        const values = pinVals.filter(val => (Number(val) > 0));

        if (values.length < 4) {
            alert('PIN', 'O PIN não foi preenchido corretamente!').show();
        }
        else {
            const status = await signIn(pinVals.join(''));

            if (status <= 0) {

                alert(
                    (status === 0) ? 'PIN' : 'ERRO',
                    (status === 0) ?  'O PIN informado está incorreto.' : 'Não foi possível realizar a autenticação.'
                ).show();

                pinRefs.forEach((ref, index) => {
                    ref.current?.clear();
                    pinVals[index] = '';
                });

                pinRefs[0].current?.focus();
            }
        }
    }



    function handleChangePIN(val: any, pos: number) {
        pinVals[pos] = String(Number(val));

        if (Number(pinVals[pos]) > 0) {
            if (pos < 3) {
                pinRefs[pos + 1].current?.focus();
            }
            else {
                shouldBeSignIn();
            }
        }
        else {
            if (pos > 0) {
                pinRefs[pos - 1].current?.focus();
            }
        }
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{
                    flex: 1,
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 60
                    }}>

                    <Image
                        style={{ width: 86, height: 86 }}
                        source={ require('../../../../assets/icon.png') }/>

                    <Text style={{ marginBottom: 30, ...labels.primaryLarge }}>Clear M:A:C</Text>

                </View>

                <View style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 60
                    }}>

                    <TextInput
                        ref={ pinRefs[0] }
                        style={ styles.inputPIN }
                        keyboardType="numeric"
                        onChangeText={ (value) => handleChangePIN(value, 0) } />

                    <TextInput
                        ref={ pinRefs[1] }
                        style={ styles.inputPIN }
                        keyboardType="numeric"
                        onChangeText={ (value) => handleChangePIN(value, 1) } />

                    <TextInput
                        ref={ pinRefs[2] }
                        style={ styles.inputPIN }
                        keyboardType="numeric"
                        onChangeText={ (value) => handleChangePIN(value, 2) } />

                    <TextInput
                        ref={ pinRefs[3] }
                        style={ styles.inputPIN }
                        keyboardType="numeric"
                        onChangeText={ (value) => handleChangePIN(value, 3) } />

                </View>

                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 30
                    }}>

                    <Text style={ labels.primary }>CONEXÃO SEGURA?</Text>

                    <Checkbox
                        style={{ margin: 8 }}
                        value={ useSafeMode }
                        onValueChange={ () => toggleSafeMode() }
                        color={ useSafeMode ? themes['light'].colorSecondary : undefined }/>

                </View>

            </View>

        </SafeAreaView>
    );
}
