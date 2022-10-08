import React from "react";

import { TouchableOpacity } from "react-native";



export default function Button(props: any) {
    
    return (
        <TouchableOpacity
            onPress={ props.onPress }
            style={{ ...props.style, padding: 2 }}>

            { props.children }

        </TouchableOpacity>
    );
}
