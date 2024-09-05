import { StyleSheet, Dimensions } from "react-native";

export const Painel = StyleSheet.create( {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    qrcode: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width - 110,
    },
    camera: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width,
    },
    quadro: {
        position: 'absolute',
        width: 250,
        height: 250,
        bottom: 80,
        right: 70,
        borderRadius: 20,
        borderBlockColor: 'blue',
        borderWidth: 6,
        padding: 20,
        borderColor: "white"
    }
})