import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenMapa, ScreenCoordenadas} from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';
import { colors } from "../styles/GlobalStyles";

export interface ICoords {
    origemLatitude?: string
    origemLongitude?: string
    destinoLatitude?: string
    destinoLongitude?: string
}

type TabParam = {
    Coordenadas: undefined
    Mapa: undefined | ICoords
}

type MenuScreenNavigation = BottomTabNavigationProp<TabParam, "Coordenadas">

export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<TabParam>();
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: colors.primary },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarActiveBackgroundColor: colors.secondary
        }}>
            <Tab.Screen name="Coordenadas" component={ScreenCoordenadas}
                options={{
                    title:"Entrada de Dados",
                    tabBarIcon: () => (
                        <Feather name="search" size={27} color="white" />
                    )
                }}
            />

            <Tab.Screen name="Mapa" component={ScreenMapa}
                options={{
                    title:"Posiciona Mapa",
                    tabBarIcon: () => (
                        <Entypo name="map" size={27} color="white" />
                    )
                }}
            />
            </Tab.Navigator>
    )
}