import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Home from './Home';
import CriarConta from './CriarConta';
import RecuperarSenha from './RecuperarSenha';
import NovaVacina from './NovaVacina';
import EditarVacina from './EditarVacina';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{headerTintColor: '#419ED7',headerTitle: 'Minhas Vacinas', headerStyle: {backgroundColor: '#C1E7F9'}}} />
                <Stack.Screen name='CriarConta' component={CriarConta} options={{headerTintColor: '#419ED7',headerTitle: 'Nova Conta', headerStyle: {backgroundColor: '#C1E7F9'}}} />
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} options={{headerTintColor: '#419ED7',headerTitle: 'MyHealth', headerStyle: {backgroundColor: '#C1E7F9'}}} />
                <Stack.Screen name='NovaVacina' component={NovaVacina} options={{headerTintColor: '#419ED7',headerTitle: 'Nova Vacina', headerStyle: {backgroundColor: '#C1E7F9'}}} />
                <Stack.Screen name='EditarVacina' component={EditarVacina} options={{headerTintColor: '#419ED7',headerTitle: 'Editar Vacina', headerStyle: {backgroundColor: '#C1E7F9'}}} />
        
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;