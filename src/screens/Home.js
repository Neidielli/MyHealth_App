import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/Home_sty.js'
import { useEffect, useState } from "react";
import {TextInput, Searchbar } from 'react-native-paper';
import { FlatList } from "react-native-gesture-handler";
import Vacina from '../../components/CardVacina.js';
import { db } from "../firebase/config.js";
import { onSnapshot, query, collection } from "firebase/firestore";

const Home = (props) => {

     const [vacinas, setVacinas] = useState([])

    const [pesquisa, setPesquisa] = useState('')
    const theme = Appearance.getColorScheme()
    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }
    const [searchQuery, setSearchQuery] = useState('');
    const Search = query => setSearchQuery(query);
    const [listaVacinas, setListaVacinas] = useState([]) // guarda a lista de vacinas que está no firestore

    useEffect(() => {
        const q = query(collection(db, "vacinas"))

        onSnapshot(q, (snapshot) => {
            const vacinas = []; // limpa o array
            
            snapshot.forEach((doc) => {
                vacinas.push({
                    id: doc.id,
                    dataVacina: doc.data().dataVacina,
                    vacina: doc.data().vacina,
                    dose: doc.data().dose,
                    urlComprovante: doc.data().urlComprovante,
                    proxVacina: doc.data().proxVacina
                })
                console.log("Documento: " + JSON.stringify(doc.data()))
            })

            setListaVacinas(vacinas)
        })
    }, [])

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

                    <FlatList style={{ marginTop: -15, marginBottom: 20 }} numColumns={2} extraData={listaVacinas} data={listaVacinas} renderItem={ ({ item }) => {
                        return <Vacina 
                            navigation={props.navigation}
                            id={item.id}
                            vacina={item.vacina} 
                            checked={item.dose}
                            dataVacina={item.dataVacina}
                            comprovante={item.urlComprovante}
                            proxVacina={item.proxVacina}

                        /> 
                    }}/>
                        

                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={goToNovaVacina}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Nova Vacina</Text>
                    </TouchableOpacity>


                </View>

        </View>
    )
    
}

export default Home;