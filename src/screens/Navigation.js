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
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='CriarConta' component={CriarConta} />
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />
                <Stack.Screen name='NovaVacina' component={NovaVacina} />
                <Stack.Screen name='EditarVacina' component={EditarVacina} />
        
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;