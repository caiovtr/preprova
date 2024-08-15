import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MensagemStack"
import { Painel } from './style';
import { useState } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ButtonInterface } from "../../components/ButtonInterface";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { IMessage } from "../../services/data/Message";
import { apiMessage } from "../../services/data";

export function CadMensagem({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IMessage>();
    const {setLoading} = useAuth()

    async function handleCadMessage() {
        if (data?.title && data.message) {
            console.log(data)
            setLoading(true)
            try {
                await apiMessage.store(data)
                Alert.alert("Mensagem Cadastrada!")
                navigation.navigate("Mensagem")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }

    function handleChange(item: IMessage) {
        setData({ ...data, ...item });
    }

    return (
        <View style={Painel.container}>
            <Text style={Painel.titulo}>Cadastrar Mensagem</Text>
            <KeyboardAvoidingView>
                <View style={Painel.campoTitulo}>
                    <TextInput  style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Titulo"
                        onChangeText={(i) => handleChange({ title: i })}
                    />
                </View>

                <View style={Painel.campoMensagem}>
                    <TextInput  style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Mensagem"
                        onChangeText={(i) => handleChange({ message: i })}
                    />
                </View>

                <ButtonInterface title="Enviar" type="secondary" onPressI={handleCadMessage} />
                <ButtonInterface title="Voltar" type="primary" onPressI={()=> navigation.navigate("Mensagem")} />

            </KeyboardAvoidingView>

        </View>

    )
}