import { View, Text, TouchableOpacity, Appearance, FlatList } from "react-native";
import { estilo } from './css/ProximaVacinas_sty.js'
import { useState, useEffect } from "react";
import {TextInput } from 'react-native-paper';

import Vacina from '../../components/CardVacina.js';
import { db } from "../firebase/config.js";
import { onSnapshot, query, collection } from "firebase/firestore";

const ProximasVacinas = (props) => {

    const [vacinas, setVacinas] = useState([])

    const [pesquisa, setPesquisa] = useState('')
    const theme = Appearance.getColorScheme()
    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }
    // const [searchQuery, setSearchQuery] = useState('');
    // const Search = query => setSearchQuery(query);
    const [listaVacinas, setListaVacinas] = useState([]) // guarda a lista de vacinas que está no firestore

    useEffect(() => {
        const q = query(collection(db, "vacinas"))

        onSnapshot(q, (snapshot) => {
            const vacinas = []; // limpa o array
            
            snapshot.forEach((doc) => {
                vacinas.push({
                    id: doc.id,
                    vacina: doc.data().vacina,
                    proxVacina: doc.data().proxVacina
                })
                console.log("Documento: " + JSON.stringify(doc.data()))
            })

            setListaVacinas(vacinas)
        })
    }, [])
    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <FlatList style={{ marginTop: 15}} numColumns={1} extraData={listaVacinas} data={listaVacinas} renderItem={ ({ item }) => {
                        return <Vacina 
                            navigation={props.navigation}
                            id={item.id}
                            vacina={item.vacina} 
                            proxVacina={item.proxVacina}

                        /> 
                    }}/>
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