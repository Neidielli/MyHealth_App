import { View, Text, TouchableOpacity, Appearance, FlatList } from "react-native";
import { estilo } from './css/ProximaVacinas_sty.js'
import { useState } from "react";
import {TextInput } from 'react-native-paper';

import CardVacina from '../../components/CardVacina.js';

const ProximasVacinas = (props) => {

    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            dataAplicacao: '19/09/2020',
            dose: 1,
            comprovante: require('../../assets/images/sair.png'),
            proximaAplicacao: '19/09/2024'  
        },
        {
            id: 2,
            nome: 'H1N1',
            dataAplicacao: '19/09/2020',
            dose: 3,
            comprovante: require('../../assets/images/sair.png'),
            proximaAplicacao: '19/09/2024'
        },
        {
            id: 3,
            nome: 'Sarampo',
            dataAplicacao: '01/03/2020',
            dose: 1,
            comprovante: require('../../assets/images/sair.png'),
            proximaAplicacao: '19/12/2024'
        },
    ]

    const theme = Appearance.getColorScheme()
    const goToNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina'});
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <FlatList data={listaVacinas} renderItem={({ item }) => <CardVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={1} />
                    </View>
                </View>

                <View style={theme == 'light' ? estilo.light.footer : estilo.dark.footer}>
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={goToNovaVacina}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Nova Vacina</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
        

    
}

export default ProximasVacinas;