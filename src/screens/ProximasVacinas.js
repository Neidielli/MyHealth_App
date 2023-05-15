import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/ProximaVacinas_sty.js'
import { useState } from "react";
import {TextInput } from 'react-native-paper';

const ProximasVacinas = (props) => {

    const theme = Appearance.getColorScheme()
    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
                <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>
                    <View style={theme == 'light' ? estilo.light.menu : estilo.dark.menu}>
                        <View style={theme == 'light' ? estilo.light.menuHamb : estilo.dark.menuHamb}>
                            <Text>Menu Hamburguer</Text>
                        </View>

                        <View style={theme == 'light' ? estilo.light.titleHeader : estilo.dark.titleHeader}>
                            <Text>Minhas Vacinas</Text>
                        </View>
                    </View>
                </View>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                </View>

                <View style={theme == 'light' ? estilo.light.footer : estilo.dark.footer}>
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={goToNovaVacina}>Nova Vacina</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
        

    
}

export default ProximasVacinas;