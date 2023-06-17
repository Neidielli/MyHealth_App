import { View, Text, TouchableOpacity, Appearance, FlatList } from "react-native";
import { estilo } from './css/ProximaVacinas_sty.js'
import { useState, useEffect } from "react";
import {TextInput } from 'react-native-paper';

import Vacina from '../../components/CardProxVacinas.js';
import { db, auth } from "../firebase/config.js";
import { onSnapshot, query, collection, where, getDocs, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const ProximasVacinas = (props) => {

    const theme = Appearance.getColorScheme()
    const [listaVacinas, setListaVacinas] = useState([]) // guarda a lista de vacinas que está no firestore
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "usuarios"), where("userId", "==", userId));
                const querySnapshot = await getDocs(q); // Tira um snapshot de usuarios collection
                const usuarioDoc = querySnapshot.docs[0];
    
                const usuarioRef = doc(db, "usuarios", usuarioDoc.id); // Ref ao usuario
                const vacinaRef = collection(usuarioRef, "vacinas"); // Ref a vacinas collection
                const docsVacina = await getDocs(vacinaRef); 
    
                const vacinas = []; // Inicializa o Array
    
                docsVacina.forEach((doc) => {
                    vacinas.push({
                        id: doc.id,
                        dataVacina: doc.data().dataVacina,
                        vacina: doc.data().vacina,
                        dose: doc.data().dose,
                        urlComprovante: doc.data().urlComprovante,
                        proxVacina: doc.data().proxVacina
                    });
    
                    console.log("Documento: " + JSON.stringify(doc.data()));
                });
    
                setListaVacinas(vacinas);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

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