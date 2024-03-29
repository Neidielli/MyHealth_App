import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/Home_sty.js'
import { useEffect, useState } from "react";
import {TextInput, Searchbar } from 'react-native-paper';
import { FlatList } from "react-native-gesture-handler";
import Vacina from '../../components/CardVacina.js';
import { db, auth } from "../firebase/config.js";
import { onSnapshot, query, collection, where, getDocs, QuerySnapshot, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { reducerSetUsuario } from '../redux/usuarioSlice';

const Home = (props) => {

    const [vacinas, setVacinas] = useState([]);
    const [originalVacinas, setOriginalVacinas] = useState([]);
    const [pesquisa, setPesquisa] = useState('')
    const theme = Appearance.getColorScheme()
    const [searchQuery, setSearchQuery] = useState('');
    const Search = query => setSearchQuery(query);
    const [listaVacinas, setListaVacinas] = useState([]) // guarda a lista de vacinas que está no firestore
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;
    const idUsuario = useSelector((state) => state.usuario.id)
    const dispatch = useDispatch();

    const goToNovaVacina = () => {
        props.navigation.navigate('NovaVacina');
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const q = query(collection(db, "usuarios"), where("userId", "==", userId));
            const querySnapshot = await getDocs(q);
            const usuarioDoc = querySnapshot.docs[0];
      
            const usuarioRef = doc(db, "usuarios", usuarioDoc.id);
            const vacinaRef = collection(usuarioRef, "vacinas");

            // dispatch(reducerSetUsuario({ nome: doc.data().nome, id: doc.id }))
      
            const unsubscribe = onSnapshot(vacinaRef, (snapshot) => {
              const vacinas = []; // Inicializa o array
      
              snapshot.forEach((doc) => {
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
              setOriginalVacinas(vacinas);
            });
      
            // Retorne uma função de limpeza para cancelar a inscrição no momento da desmontagem do componente
            return () => unsubscribe();
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, [userId]);

      const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredVacinas = originalVacinas.filter((vacina) =>
          vacina.vacina.toLowerCase().includes(query.toLowerCase())
        );
        setListaVacinas(filteredVacinas);
      };


    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
                <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>

                    <Searchbar
                        icon={require('../../assets/images/searchIcon.png')}
                        style={theme == 'light' ? estilo.light.srcBar : estilo.dark.srcBar}
                        placeholder="Pesquisar Vacina..."
                        onChangeText={handleSearch}
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