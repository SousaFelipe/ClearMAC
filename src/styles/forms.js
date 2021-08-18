import { StyleSheet } from 'react-native'

import themes from './themes'



const textInput = {
    height: 46,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 23,
    backgroundColor: themes.light.colorWhite
}

const textInputBorder = {
    ...textInput,
    borderWidth: 1,
    borderColor: themes.light.colorGray
}

const textInputShadow = {
    ...textInput,
    shadowColor: "#000000",
    shadowOffset: {
        width:  0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
}



const forms = StyleSheet.create({
    textInput: textInput,
    textInputBorder: textInputBorder,
    textInputShadow: textInputShadow,
})



export default forms
