import React from "react";

import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";



export default function HomePage({ navigation }: any) {
    return (
        <View style={ styles.container }>

            <Image
                style={ styles.logo }
                source={ require('../../../../assets/images/icon.png') } />

            <Text style={ styles.appName }>ClearMAC</Text>

            <TouchableOpacity
                onPress={ () => navigation.navigate('Search') }
                style={{ ...styles.searchInput, marginTop: 30 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                        style={{ width: 24, height: 24 }}
                        source={ require('../../../../assets/icons/search.png') } />

                    <Text style={ styles.searchText }>CPF ou nome do cliente...</Text>

                </View>
            </TouchableOpacity>

            <Text style={ styles.footer }>©flpss</Text>

        </View>
    )
}
