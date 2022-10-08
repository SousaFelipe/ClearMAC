import React from "react";
import { Image, View } from "react-native";

import themes from "../../../themes"



export default function Splash() {
    return (
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themes['light'].colorWhite
            }}>

            <Image 
                style={{ width: 64, height: 64 }}
                source={ require('../../../../assets/images/logo.png') }/>

        </View>
    );
}
