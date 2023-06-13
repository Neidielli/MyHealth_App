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

    // const listaVacinas = [
    //     {
    //         id: 1,
    //         nome: 'BCG',
    //         dataAplicacao: '19/09/2020',
    //         dose: 1,
    //         comprovante: require('../../assets/images/sair.png'),
    //         proximaAplicacao: '19/09/2024'  
    //     },
    //     {
    //         id: 2,
    //         nome: 'H1N1',
    //         dataAplicacao: '19/09/2020',
    //         dose: 3,
    //         comprovante: require('../../assets/images/sair.png'),
    //         proximaAplicacao: '19/09/2024'
    //     },
    //     {
    //         id: 3,
    //         nome: 'Sarampo',
    //         dataAplicacao: '01/03/2020',
    //         dose: 1,
    //         comprovante: require('../../assets/images/sair.png'),
    //         proximaAplicacao: '19/12/2024'
    //     },
    //     {
    //         id: 4,
    //         nome: 'Covid',
    //         dataAplicacao: '19/09/2020',
    //         dose: 1,
    //         comprovante: require('../../assets/images/sair.png'),
    //         proximaAplicacao: null
    //     },

    // ]

    // if (vacinas.length == 0) {
    //     setVacinas(listaVacinas)
    // }
    // // lógica do CRUD
    // if (typeof props.route.params !== 'undefined') {
    //     if (typeof props.route.params.itemAdicionar !== 'undefined') {
    //         vacinas.push({
    //             id: props.route.params.itemAdicionar.id,
    //             nome: props.route.params.itemAdicionar.nome,
    //             dataAplicacao: props.route.params.itemAdicionar.dataVacina,
    //             dose: props.route.params.itemAdicionar.checked,
    //             proximaAplicacao: props.route.params.itemAdicionar.proxVacina,
    //             comprovante: props.route.params.itemAdicionar.comprovante,
    //         })
    //     }
    //     if (typeof props.route.params.itemEditar !== 'undefined') {
    //         var index = vacinas.findIndex((item) => item.id == props.route.params.itemEditar.id)
    //         if(index !== -1) {
    //             let a = vacinas.slice();
    //             a[index] = props.route.params.itemEditar;
    //             setVacinas(a);
    //             props.route.params.itemEditar = 'undefined';
    //         }
    //     }
    //     if (typeof props.route.params.idApagar !== 'undefined') {
    //         var index = vacinas.findIndex((item) => item.id == props.route.params.idApagar)
    //         if(index !== -1) {
    //             vacinas.splice(index, 1);
    //         }
    //     }
    // }

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
        var vacinas = []

        onSnapshot(q, (snapshot) => {
            vacinas = []; // limpa o array
            snapshot.forEach((doc) => {
                vacinas.push({
                    id: doc.id,
                    dataVacina: doc.data().dataVacina,
                    vacina: doc.data().vacina,
                    dose: doc.data().dose,
                    comprovante: doc.data().comprovante,
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

                    <FlatList data={listaVacinas} renderItem={ ({ item }) => <Vacina item={item} navigation={props.navigation} /> } keyExtractor={item => item.id} numColumns={2} />

                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={goToNovaVacina}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Nova Vacina</Text>
                    </TouchableOpacity>


                </View>

        </View>
    )
    
}

export default Home;