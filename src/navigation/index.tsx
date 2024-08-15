import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { MenuStack } from './MenuStack';
import { MenuDrawer } from './MenuDrawer';
import { MenuBottomTabs } from './MenuBottomTabs';
import { useAuth } from '../hook/auth';
import { Loading } from '../components/Loading';

export default function Navigation () {
    const {user, loading} = useAuth()
    if (loading) {
        return <Loading/>
    }
    return (
        <NavigationContainer>
            {user?.token ? <MenuBottomTabs/> : <MenuStack/>}
        </NavigationContainer>
    )
}