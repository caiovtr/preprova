import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenPerfil, ScreenMensagem, ScreenCamera, ScreenImages } from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import { MensagemStack } from "./MensagemStack";
import React from 'react';

type MenuTabParam = {
    Perfil: undefined
    Mensagens: undefined
    Camera: undefined
    Album: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="user" size={27} color="black" />
                    )
                }}
            />

            <Tab.Screen name="Mensagens" component={MensagemStack}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="mail" size={27} color="black" />
                    )
                }}
            />

            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="camera" size={27} color="black" />
                    )
                }}
            />

            <Tab.Screen name="Album" component={ScreenImages}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="image" size={27} color="black" />
                    )
                }}
            />
            </Tab.Navigator>
    )
}