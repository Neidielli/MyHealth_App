import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../../components/customDrawer';

import React from 'react';
import Login from './Login';
import Home from './Home';
import CriarConta from './CriarConta';
import RecuperarSenha from './RecuperarSenha';
import NovaVacina from './NovaVacina';
import EditarVacina from './EditarVacina';
import ProximasVacinas from './ProximasVacinas';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (    
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='ProximasVacinas' component={ProximasVacinas}/>
        </Drawer.Navigator>      
    )
}

const Navigation = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{headerTitleStyle: {fontSize: 30, fontFamily: 'AveriaLibre-Regular'}, headerTintColor: '#419ED7', headerStyle: {backgroundColor: '#C1E7F9'}}}>
            <Stack.Screen name='EditarVacina' component={EditarVacina} options={{headerTitle: 'Editar Vacina'}} />
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown: false }} />
                <Stack.Screen name='CriarConta' component={CriarConta} options={{headerTitle: 'Nova Conta'}} />
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} options={{headerTitle: 'MyHealth'}} />
                <Stack.Screen name='NovaVacina' component={NovaVacina} options={{headerTitle: 'Nova Vacina'}} />
                
                <Stack.Screen name='ProximasVacinas' component={ProximasVacinas} options={{headerTitle: 'Proximas Vacinas'}} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Navigation;