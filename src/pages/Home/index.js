import React from 'react'

import {
    Image,
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'
import themes from '../../styles/themes'



function Home ({ navigation }) {
    return (
        <View style={ styles.container }>

            <StatusBar
                animated={true}
                backgroundColor={ themes.light.colorBrand }
                barStyle='dark' />

            <Image
                style={ styles.logo }
                source={ require('../../assets/logo.png') } />

            <Text style={ styles.appName }>ClearMAC</Text>

            <TouchableOpacity
                onPress={ () => navigation.navigate('SearchScreen') }
                style={{ ...styles.searchInput, marginTop: 30 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                    <FontAwesomeIcon
                        icon={ faSearch }
                        color={ themes.light.colorTextDisabled }/>

                    <Text style={ styles.searchText }>CPF ou nome do cliente...</Text>

                </View>
            </TouchableOpacity>

            <Text style={ styles.footer }>© 2021 UPNET</Text>

        </View>
    )
}



export default Home
