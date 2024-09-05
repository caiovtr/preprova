import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MenuStack"
import { Painel } from './style';
import { useState } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ButtonInterface } from "../../components/ButtonInterface";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";

export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Login({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IAuthenticate>();
    const {signIn, setLoading} = useAuth()

    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
            setLoading(true)
            try {
                await signIn(data)
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

    function handleRegister() {
        navigation.navigate("Cadastro")
    }

    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }

    return (
        <View style={Painel.container}>
            <Text style={Painel.titulo}>LOGIN</Text>
            <KeyboardAvoidingView>
                <View style={Painel.campo}>
                    <MaterialIcons name="email" style={Painel.icone} />
                    <TextInput  style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ email: i })}
                    />
                </View>

                <View style={Painel.campo}>
                    <MaterialIcons name="password" style={Painel.icone}/>
                    <TextInput  style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>

                <ButtonInterface title="Logar" type="secondary" onPressI={handleSignIn} />
                <ButtonInterface title="Cadastrar" type="primary" onPressI={handleRegister} />

            </KeyboardAvoidingView>

        </View>

    )
}