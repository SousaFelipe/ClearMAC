import React, { useEffect, useState } from "react";

import { Animated } from "react-native";



export default function Collapsible({ collapsed, maxHeight, children }: any) {



    const [height] = useState(new Animated.Value(0));



    useEffect(() => {

        Animated.timing(height, {

            toValue: collapsed ? 0 : Number(maxHeight),
            duration: 150,
            useNativeDriver: false

        }).start();

    }, [collapsed, height]);



    return (
        <Animated.View style={{ height }}>
            { children }
        </Animated.View>
    );
}