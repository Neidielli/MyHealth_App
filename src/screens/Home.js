import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/Home_sty.js'
import { useState } from "react";
import {TextInput, Searchbar } from 'react-native-paper';

const Home = (props) => {

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
                    <View style={theme == 'light' ? estilo.light.menu : estilo.dark.menu}>
                        <View style={theme == 'light' ? estilo.light.menuHamb : estilo.dark.menuHamb}>
                            <Text>Menu Hamburguer</Text>
                        </View>

                        <View style={theme == 'light' ? estilo.light.titleHeader : estilo.dark.titleHeader}>
                            <Text>Minhas Vacinas</Text>
                        </View>
                    </View>

                    <Searchbar
                        icon={require('../../assets/images/vacina-icone.png')}
                        style={theme == 'light' ? estilo.light.srcBar : estilo.dark.srcBar}
                        placeholder="Pesquisar Vacina..."
                        onChangeText={Search}
                        value={searchQuery}
                        iconColor="#8B8B8B"
                        placeholderTextColor="#8B8B8B"
                    />
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

export default Home;