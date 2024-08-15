import { Text, View, Image, TouchableOpacity } from "react-native"
import { Painel } from "./style"
import { useAuth } from "../../hook/auth"
import { Loading } from "../../components/Loading"

export function Perfil() {
    const {user, signOut} = useAuth()
    return (
        <View style={Painel.container}>
            <View style={Painel.div}>
                <Text style={Painel.nome}>Nome: {user?.user.name}</Text>
                <Text style={Painel.nome}>Email: {user?.user.email}</Text>
            </View>
            <TouchableOpacity style={Painel.botao} onPress={signOut}>
                <Text style={Painel.textoBotao}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}