import React from 'react'

import {
<<<<<<< HEAD
    Image,
=======
>>>>>>> 1384d75 (Clena MAC system ok)
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

<<<<<<< HEAD
            <Image
                style={ styles.logo }
                source={ require('../../assets/logo.png') } />

            <Text style={ styles.appName }>ClearMAC</Text>

            <TouchableOpacity
                onPress={ () => navigation.navigate('SearchScreen') }
                style={{ ...styles.searchInput, marginTop: 30 }}>
=======
            <TouchableOpacity
                onPress={ () => navigation.navigate('SearchScreen') }
                style={ styles.searchInput }>
>>>>>>> 1384d75 (Clena MAC system ok)
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                    <FontAwesomeIcon
                        icon={ faSearch }
                        color={ themes.light.colorTextDisabled }/>

                    <Text style={ styles.searchText }>CPF ou nome do cliente...</Text>

                </View>
            </TouchableOpacity>

<<<<<<< HEAD
            <Text style={ styles.footer }>© 2021 UPNET</Text>

=======
>>>>>>> 1384d75 (Clena MAC system ok)
        </View>
    )
}



export default Home
