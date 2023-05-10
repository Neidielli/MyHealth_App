import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/Home_sty.js'
import { useState } from "react";
import {TextInput } from 'react-native-paper';

const NovaVacina = (props) => {

    const theme = Appearance.getColorScheme()
    const goToHome = () => {
        props.navigation.navigate('Home');
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
                <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>
                    <View style={theme == 'light' ? estilo.light.menu : estilo.dark.menu}>
                        <View style={theme == 'light' ? estilo.light.titleHeader : estilo.dark.titleHeader}>
                            <Text>Nova Vacina</Text>
                        </View>
                    </View>

                 
                </View>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                </View>

                <View style={theme == 'light' ? estilo.light.footer : estilo.dark.footer}>
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={goToHome}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )

}

export default NovaVacina;