import { View, Text, TouchableOpacity, Appearance, Image } from "react-native";
import { TextInput, RadioButton } from 'react-native-paper';
import { estilo } from './css/NovaVacina_sty.js'
import { useState } from "react";

import { launchCamera } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import MaskInput, { Masks } from 'react-native-mask-input';

import { addDoc, collection, setDoc, doc, query, where, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase/config.js";
import { auth } from "../firebase/config.js";
import { getAuth } from "firebase/auth";



const NovaVacina = (props) => {

    const [dataVacina, setDataVacina] = useState('');
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState();
    const [urlComprovante, setUrlComprovante] = useState('');
    const theme = Appearance.getColorScheme()
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    const cleanStates = () =>{
        setDataVacina('')
        setProxVacina('')
        setNome('')
        setChecked('')
    }

    const cadastrar = async () => {
        const q = query(collection(db, "usuarios"), where("userId", "==", userId)) // encontrar as vacinas do usuario atual
        const querySnapshot = await getDocs(q);
        const usuarioDoc = querySnapshot.docs[0];
        const colecaoVacinas = collection(usuarioDoc.ref, "vacinas"); // ao add vacinas, ele pega a ref do usuario

        const imageRef = ref(storage, "images/" +userId+ Math.random(1,10))

        
        const file = await fetch(urlComprovante)
        const blob = await file.blob()

        uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
            .then((result) => {
                console.log("Arquivo enviado com sucesso.")
                getDownloadURL(imageRef)
                    .then((url) => {
                        const documento = {
                            dataVacina: dataVacina,
                            vacina: nome,
                            dose: checked,
                            urlComprovante: url,
                            proxVacina: proxVacina
                        }
        
                        addDoc(colecaoVacinas, documento)
                            .then((refDoc) => {
                                console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc))
                                cleanStates()
                            })
                            .catch((error) => {
                                console.log("Error: " + JSON.stringify(error))
                            })
                            props.navigation.navigate('Home');
                    })
            })
            .catch((error) => {
                console.log("Erro ao enviar arquivo: " + JSON.stringify(error))
            })
               
    }

    const comprovanteVacina = () => {

       launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1})
        .then((result) => {
            setComprovante(result.assets[0])
            setUrlComprovante(result.assets[0].uri)   
        })
        .catch((error) => {
            console.log("Erro ao capturar imagem: " + JSON.stringify(error))
        })
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
        

            <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                <View style={theme == 'light' ? estilo.light.inputGroup : estilo.dark.inputGroup}>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Data da vacina </Text>
                        <MaskInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={dataVacina}
                            onChangeText={setDataVacina}
                            placeholderTextColor="#419ED7"
                            mask={Masks.DATE_DDMMYYYY}
                        />
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Vacina </Text>
                        <TextInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Dose </Text>   

                        <View style={theme == 'light' ? estilo.light.containerRadio : estilo.dark.containerRadio}>
                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="1a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
                                    status={checked === '1a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('1a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>1º dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="2a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
                                    status={checked === '2a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('2a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>2º dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="3a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
                                    status={checked === '3a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('3a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>3º dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="Dose única"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                   
                                    status={checked === 'Dose única' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Dose única')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>Dose única</Text>
                            </View>
                        </View>
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Comprovante </Text>
                        
                        <View style={theme == 'light' ? estilo.light.containerImagem : estilo.dark.containerImagem}>
                            <TouchableOpacity style={theme == 'light' ? estilo.light.btnComprovante : estilo.dark.btnComprovante} onPress={() => comprovanteVacina()}>
                                <Text style={theme == 'light' ? estilo.light.txtComprovante : estilo.dark.txtComprovante}>Selecionar imagem</Text>
                            </TouchableOpacity>
                            {
                                urlComprovante ?
                                    <Image source={{ uri: urlComprovante }} style={{ height: 100, width: 100 }} />
                                    :
                                    null
                            }
                        </View>
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Próxima vacina </Text>
                        <MaskInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={proxVacina}
                            onChangeText={setProxVacina}
                            placeholderTextColor="#419ED7"
                            mask={Masks.DATE_DDMMYYYY}
                        /> 
                    </View> 
                
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={() => {cadastrar()}}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>     
            
            </View>
        </View>
    )

}

export default NovaVacina;