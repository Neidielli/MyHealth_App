import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { useState } from 'react'
import { estilo } from './css/RecuperarSenha_sty.js'
import { TextInput } from 'react-native-paper';

const RecuperarSenha = () => {

    const [email, setEmail] = useState('')
    const theme = Appearance.getColorScheme()
    const [showInvalidMsg, setShowInvalidMsg] = useState(false);
    const RecuperarSenha = () => {
        if(!email.includes('@')){
          setShowInvalidMsg(true);
        } else {
          setShowInvalidMsg(false);
        }
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>

            <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
                <View style={theme == 'light' ? estilo.light.mainInput : estilo.dark.mainInput}>
                    <TextInput
                    label="E-mail"
                    style={theme == 'light' ? estilo.light.inputText : estilo.dark.inputText}
                    value={email}
                    onChangeText={setEmail} 
                    />
                </View>

                {showInvalidMsg && <Text style={{ textAlign: 'center', color: '#ff0000' }}>E-mail inválido</Text>}

                <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={RecuperarSenha}>
                    <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
        

    
}

export default RecuperarSenha;