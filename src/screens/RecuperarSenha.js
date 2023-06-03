import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { useState } from 'react'
import { estilo } from './css/RecuperarSenha_sty.js'
import { TextInput } from 'react-native-paper';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config.js";

const RecuperarSenha = () => {

    const [email, setEmail] = useState('')
    const theme = Appearance.getColorScheme()
    const [showInvalidMsg, setShowInvalidMsg] = useState(false);
    const RecuperarSenha = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Email enviado com sucesso ");
        })
        .catch(() => {
            console.log("Erro ao redefinir: " + JSON.stringify(error))
        })
        // if(!email.includes('@')){
        //   setShowInvalidMsg(true);
        // } else {
        //   setShowInvalidMsg(false);
        // }
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>

            <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
                {/* <View style={theme == 'light' ? estilo.light.mainInput : estilo.dark.mainInput}>
                    <TextInput
                    label="E-mail"
                    style={theme == 'light' ? estilo.light.inputText : estilo.dark.inputText}
                
                    />
                </View> */}

                <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>E-mail </Text>
                            <TextInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor="#419ED7"
                            />
                </View> 

                <View style={theme == 'light' ? estilo.light.erro : estilo.dark.erro}>
                    {showInvalidMsg && <Text style={theme == 'light' ? estilo.light.textErro : estilo.dark.textErro}>E-mail inválido</Text>}
                </View>
                

                <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={RecuperarSenha}>
                    <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
        

    
}

export default RecuperarSenha;