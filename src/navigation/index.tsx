import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { MenuBottomTabs } from './MenuBottomTabs';

export default function Navigation () {
    return (
        <NavigationContainer>
            <MenuBottomTabs/>
        </NavigationContainer>
    )
}