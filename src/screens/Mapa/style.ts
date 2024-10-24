import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(239, 253, 255)"
    },
    map: {
        width: '100%',
        height: '100%'
    },
    texto: {
        color: "white",
        fontSize: 18
    },
    barra: {
        position: 'absolute',
        zIndex: 1,
        width: '80%',
        top: 10,
        marginLeft: 30
    },
    input: {
        height: 56,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black'
    }
})