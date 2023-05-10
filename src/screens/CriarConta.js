import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/CriarConta_sty.js'

const CriarConta = (props) => {

    const theme = Appearance.getColorScheme()
    const goToLogin = () => {
        props.navigation.navigate('Login');
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
                <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>

                </View>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                </View>

                <View style={theme == 'light' ? estilo.light.footer : estilo.dark.footer}>
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={goToLogin}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
        

    
}

export default CriarConta;