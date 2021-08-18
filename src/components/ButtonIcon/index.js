import React from 'react'

import { TouchableOpacity } from 'react-native'



const ButtonIcon = (props) => (
    <TouchableOpacity
        onPress={ props.onPress }
        style={{ ...props.style, padding: 2 }}>

        { props.children }
    
    </TouchableOpacity>
)



export default ButtonIcon
