import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import { Painel } from './style';
import { useState, useEffect, useRef } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

//Bibliotecas do Mapa sem API
import * as Location from "expo-location"
import MapView, { Region, Marker } from "react-native-maps"

//Bibliotecas do Mapa com API
import { 
    GooglePlaceData, GooglePlaceDetail,
    GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";

export function Mapa() {
    const [location, setLocation] = useState<null | Location.LocationObject>(null)
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);
    const [destination, setDestination] = useState<Region | null>(null);
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        const handleLocation = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg("Permissão para acessar a localização negada");
                return;
            }

            let location = await  Location.getCurrentPositionAsync();
            if (location) {
                setLocation(location);
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    }
                ]);
            }
        }
        handleLocation();
    }, [])

    async function handleDestination(data:GooglePlaceData, details:GooglePlaceDetail | null) {
        if (details) {
            setDestination({
                    latitude: details?.geometry.location.lat,
                    longitude: details?.geometry.location.lng,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
            })
            if (marker) {
                setMarker([...marker, {
                    latitude: details?.geometry.location.lat,
                    longitude: details?.geometry.location.lng,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                }])
            }
        }
    }

    let text = "Carregando...";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View>
            {!region && <Text>{text}</Text> }
            {region && (
                <>
                    <GooglePlacesAutocomplete
                        styles={{textInput: Painel.input, container: Painel.barra}}
                        placeholder="Para onde?"
                        fetchDetails={true}
                        GooglePlacesDetailsQuery={{fields: "geometry"}}
                        query={{
                            key: "AIzaSyDdDU8GLhWRZjrmp55NTqrR1GUL9BOA9pA",
                            language: "pt-BR"
                        }}
                        onFail={setErrorMsg}
                        onPress={handleDestination}
                    />
                    <MapView style={Painel.map} region={region}
                        showsUserLocation={true} ref={mapRef}
                    />
                    {marker && 
                        marker.map((item) => (
                            <Marker key={item.longitude} coordinate={item}/>
                        ))
                    }

                    {destination && (
                        <MapViewDirections
                            origin={region}
                            destination={destination}
                            apikey = "AIzaSyDdDU8GLhWRZjrmp55NTqrR1GUL9BOA9pA"
                            strokeWidth={7}
                            strokeColor="#000000"
                            lineDashPattern={[0]}
                            onReady={(result) =>{
                                mapRef.current?.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        top: 24,
                                        bottom: 24,
                                        left: 24,
                                        right: 24,
                                    }
                                })
                            }}

                        />
                    )}
                </>
            )}
            
            
        </View>
    )
}