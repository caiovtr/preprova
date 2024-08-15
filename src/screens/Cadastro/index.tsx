import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MenuStack"
import { Painel } from './style';
import { useState } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ButtonInterface } from "../../components/ButtonInterface";
import { useAuth } from "../../hook/auth";
import { apiUser } from "../../services/data";
import { AxiosError } from "axios";

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Cadastro({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IRegister>();
    const {setLoading} = useAuth()

    async function handleRegister() {
        if (data?.email && data.name && data.password) {
            console.log(data)
            setLoading(true)
            try {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                navigation.navigate("Login")
            } catch (error) {
                console.log(error)
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }

    function handleGoBack() {
        navigation.navigate("Login")
    }

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }

    return (
        <View style={Painel.container}>
            <Text style={Painel.titulo}>CADASTRAR</Text>
            <KeyboardAvoidingView>
                <View style={Painel.campo}>
                    <MaterialIcons name="person" style={Painel.icone} />
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Nome"
                        onChangeText={(i) => handleChange({ name: i })}
                    />
                </View>

                <View style={Painel.campo}>
                    <MaterialIcons name="email" style={Painel.icone} />
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Email"
                        secureTextEntry={true}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ email: i })}
                    />
                </View>

                <View style={Painel.campo}>
                    <MaterialIcons name="password" style={Painel.icone}/>
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>

                <ButtonInterface title="Cadastrar" type="secondary" onPressI={handleRegister} />
                <ButtonInterface title="Login" type="primary" onPressI={handleGoBack} />

            </KeyboardAvoidingView>
        </View>

    )
}