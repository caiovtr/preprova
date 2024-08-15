import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgb(239, 253, 255)",
    },
    nome: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center"
    },
    botao: {
        width: 130,
        height: 60,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginBottom: 20,
        borderWidth: 5,
        borderColor: "black"
    },
    textoBotao: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "700"
    },
    div: {
        width: 350,
        height: 150,
        borderRadius: 40,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "beige",
        marginBottom: 20,
        borderWidth: 5,
        borderColor: "black"
    }
})