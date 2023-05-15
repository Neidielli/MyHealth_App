import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/Home_sty.js'
import { useState } from "react";
import {TextInput, Searchbar } from 'react-native-paper';
import { FlatList } from "react-native-gesture-handler";
import Vacina from '../../components/CardVacina.js';

const Home = (props) => {

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
        {
            id: 4,
            nome: 'Covid',
            dataAplicacao: '19/09/2020',
            dose: 1,
            comprovante: require('../../assets/images/sair.png'),
            proximaAplicacao: null
        },
        

    ]

    const [pesquisa, setPesquisa] = useState('')
    const theme = Appearance.getColorScheme()
    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }
    const [searchQuery, setSearchQuery] = useState('');
    const Search = query => setSearchQuery(query);

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
                <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>

                    <Searchbar
                        icon={require('../../assets/images/searchIcon.png')}
                        style={theme == 'light' ? estilo.light.srcBar : estilo.dark.srcBar}
                        placeholder="Pesquisar Vacina..."
                        onChangeText={Search}
                        value={searchQuery}
                        iconColor="#8B8B8B"
                        placeholderTextColor="#8B8B8B"
                    />
                </View>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                    <FlatList data={listaVacinas} renderItem={ ({ item }) => <Vacina item={item} navigation={props.navigation} /> } keyExtractor={item => item.id} numColumns={2} extraData={props.navigation}/>

                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={goToNovaVacina}>Nova Vacina</Text>
                    </TouchableOpacity>


                </View>
  
        </View>
    )
        

    
}

export default Home;