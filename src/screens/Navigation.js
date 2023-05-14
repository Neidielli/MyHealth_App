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
            <Stack.Navigator screenOptions={{headerTitleStyle: {fontSize: 30, fontFamily: 'AveriaLibre-Regular'}, headerTintColor: '#419ED7', headerStyle: {backgroundColor: '#C1E7F9'}}}>
                
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{headerTitle: 'Minhas Vacinas'}} />
                <Stack.Screen name='CriarConta' component={CriarConta} options={{headerTitle: 'Nova Conta'}} />
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} options={{headerTitle: 'MyHealth'}} />
                <Stack.Screen name='NovaVacina' component={NovaVacina} options={{headerTitle: 'Nova Vacina'}} />
                <Stack.Screen name='EditarVacina' component={EditarVacina} options={{headerTitle: 'Editar Vacina'}} />
        
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;