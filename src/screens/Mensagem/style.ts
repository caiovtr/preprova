import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(239, 253, 255)"
    },
    botao: {
        backgroundColor: "rgb(12, 132, 232)",
        borderRadius: 45,
        position: "absolute",
        bottom: 10,
        right: 20
    },
    text: {
        color: "white",
        fontSize: 14
    },

    icone: {
        fontSize: 50
    },
    titulo: {
        fontSize: 25,
        fontWeight: "800",
        fontStyle: "italic",
        marginBottom: 25
    },
    mensagem: {
        backgroundColor: "rgb(159, 217, 227)",
        marginTop: 20,
        marginBottom: 20,
        height: 160,
        borderRadius: 10,
        width: 300,
        padding: 10
    },
    mensagemTexto: {
        fontSize: 18,
        marginBottom: 15
    }
})