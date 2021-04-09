import React from 'react'

import {
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

            <TouchableOpacity
                onPress={ () => navigation.navigate('SearchScreen') }
                style={ styles.searchInput }>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                    <FontAwesomeIcon
                        icon={ faSearch }
                        color={ themes.light.colorTextDisabled }/>

                    <Text style={ styles.searchText }>CPF ou nome do cliente...</Text>

                </View>
            </TouchableOpacity>

        </View>
    )
}



export default Home
