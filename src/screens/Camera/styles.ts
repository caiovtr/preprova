import { StyleSheet } from "react-native"

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1
    },
    botao: {
        height: 70,
        width: 70,
        backgroundColor: "white",
        borderRadius: 35,
    },
    footer: {
        position: "absolute",
        width: 380,
        bottom: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
})
