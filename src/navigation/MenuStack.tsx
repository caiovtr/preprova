import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {ScreenLogin, ScreenCadastro} from "../screens/index"
import { MenuDrawer } from "./MenuDrawer";

type MenuStackParam = {
    Login: undefined
    Cadastro: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown: false
        }}>
           <Stack.Screen options={{
            headerTitle: "Login"
           }} name="Login" component={ScreenLogin}/>

           <Stack.Screen options={{
            headerTitle: "Cadastro" 
           }} name="Cadastro" component={ScreenCadastro}/>
        </Stack.Navigator>
    )
}