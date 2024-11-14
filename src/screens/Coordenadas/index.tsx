import { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { colors } from '../../styles/GlobalStyles';
import { MenuTabTypes } from "../../navigation/MenuBottomTabs";
import { ICoords } from "../../navigation/MenuBottomTabs";

export function Coordenadas({ navigation }: MenuTabTypes) {
    const [data, setData] = useState<ICoords>()

    function handleChange(item: ICoords) {
        setData({ ...data, ...item });
        console.log(data)
    }

    function handleShowMap() {
        if (!data?.destinoLatitude || !data.destinoLongitude || !data.origemLatitude || !data.origemLongitude) {
        Alert.alert("Preencha todo o formulário!")
        } else {
        navigation.navigate("Mapa", data)
        }
       }

    return (
        <View style={styles.container}>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Origem</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ origemLatitude:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ origemLongitude:i })}
                />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Destino</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ destinoLatitude:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ destinoLongitude:i })}
                />
            </View>
            <TouchableOpacity onPress={handleShowMap} style={styles.botao}>
                <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}