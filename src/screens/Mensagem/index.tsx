import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useAuth } from "../../hook/auth";
import { apiMessage } from "../../services/data";
import { IResponseMessage } from "../../services/data/Message";
import { FlatList } from "react-native-gesture-handler";
import { MenuStackTypes } from "../../navigation/MensagemStack"
import { MaterialIcons} from "@expo/vector-icons";
import { Painel } from "./style";

export function Mensagem({ navigation }: MenuStackTypes) {
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        loadMessage()
    }, [])
    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View style={Painel.mensagem}>
                <Text style={Painel.mensagemTexto}>Nome: {item.user.name}</Text>
                <Text style={Painel.mensagemTexto}>Título: {item.title}</Text>
                <Text style={Painel.mensagemTexto}>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return(
            <View style={Painel.container}>
                {
                    message.length > 0 && (
                        <FlatList
                            
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={item => String(item.id)}
                        />
                    )
                }
                <TouchableOpacity style={Painel.botao}
                    onPress={()=> navigation.navigate("CadMensagem")}>
                    <MaterialIcons name="add" style={Painel.icone} />
                </TouchableOpacity>
            </View>    
        )
}