    import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
    import { ScreenPerfil } from '../screens/index';
    import React from 'react';
    import { MenuBottomTabs } from './MenuBottomTabs';

    type MenuDrawerParam = {
        Perfil: undefined
    }

    type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Perfil">

    export type MenuDrawerTypes = {
        navigation: MenuScreenNavigation;
    }

    export function MenuDrawer () {
        const Drawer = createDrawerNavigator<MenuDrawerParam>();
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Perfil' component={ScreenPerfil}/> 
            </Drawer.Navigator>
        )
    }