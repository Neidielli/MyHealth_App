import { View, Text, Image, TouchableOpacity, Appearance, Modal } from "react-native";
import { estilo } from './css/EditarVacina_sty.js'
import { useEffect, useState } from "react";

import {TextInput, RadioButton } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';

import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { launchCamera } from "react-native-image-picker";
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../firebase/config.js";

const EditarVacina = (props) => {

    const theme = Appearance.getColorScheme()
    const [modalVisible, setModalVisible] = useState(false);

    const [dataVacina, setDataVacina] = useState('');
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState('');
    const [id, setId] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState();
    const [urlComprovante, setUrlComprovante] = useState('');

    // pega o que tá no props e coloca nos estados - hook react
    useEffect(() => {
        setDataVacina(props.route.params.dataVacina)
        setNome(props.route.params.vacina)
        setChecked(props.route.params.checked)
        setId(props.route.params.id)
        setProxVacina(props.route.params.proxVacina)
        setUrlComprovante(props.route.params.urlComprovante)
    }, [])

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

    const excluir = () => {
        const idDocumento = props.route.params.id

        const refDoc = doc(db, "vacinas", idDocumento)

        deleteDoc(refDoc)
            .then(() =>{
                console.log("Documento excluido com sucesso!")
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("Erro ao excluir o documento: " + error)
            })
    }

    const salvarAlteracoes = async () => {
        const idDocumento = props.route.params.id

        const refDoc = doc(db, "vacinas", idDocumento)

        const imageRef = ref(storage, "images/vacina.jpg")

        const file = await fetch(urlComprovante)
        const  blob = await file.blob()

        uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
            .then((result) => {
                console.log("Arquivo enviado com sucesso.")
                getDownloadURL(imageRef)
                    .then((url) => {
                        updateDoc(refDoc, {
                            dataVacina: dataVacina,
                            vacina: vacina,
                            dose: dose,
                            urlComprovante: url,
                            proxVacina: proxVacina
                        })
                            .then(() => {
                                console.log("Documento atualizado com sucesso!!")
                                props.navigation.pop()
                            })
                            .catch((error) => {
                                console.log("Erro ao atualizar o documento: " + JSON.stringify(error))
                            })
                    })
                    .catch((error) => {
                        console.log("Erro ao pegar a URL da imagem: " + JSON.stringify(error))
                    })
            })
            .catch((error) => {
                console.log("Erro ao enviar o arquivo: " + JSON.stringify(error))
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
                            mask={Masks.DATE_DDMMYYYY}
                        /> 
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Vacina </Text>
                        <TextInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={nome}
                            onChangeText={setNome}
                            placeholderTextColor="#419ED7"
                        />
                    </View>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Dose </Text>

                        <View style={theme == 'light' ? estilo.light.containerRadio : estilo.dark.containerRadio}>
                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="1a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '1a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('1a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>1a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="2a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '2a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('2a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>2a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="3a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '3a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('3a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>3a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="Dose única"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
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

                            <Image source={{ uri: urlComprovante }} style={{ width: 100, height: 100 }}/>
                        </View>
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Próxima vacina </Text>
                        <MaskInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={proxVacina}
                            onChangeText={setProxVacina}
                            mask={Masks.DATE_DDMMYYYY}
                        /> 
                    </View> 
                
                    
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={() => salvarAlteracoes()}> 
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Salvar alterações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={theme == 'light' ? estilo.light.secondButton : estilo.dark.secondButton}>
                        <Image style={theme == 'light' ? estilo.light.trash : estilo.dark.trash} source={require('../../assets/images/trash.png')}/>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={() => setModalVisible(!modalVisible)}>Excluir</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType='none'
                        visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => {
                            console.log('Fechou')
                        }}
                    >
                        <View style={theme == 'light' ? estilo.light.centralView : estilo.dark.centralView}>
                            <View style={theme == 'light' ? estilo.light.modalView : estilo.dark.modalView}>
                                <Text style={theme == 'light' ? estilo.light.modalText : estilo.dark.modalText}>Tem certeza que deseja remover essa vacina?</Text>
                                <View style={theme == 'light' ? estilo.light.modalButtons : estilo.dark.modalButtons}>
                                    <TouchableOpacity
                                        style={[theme == 'light' ? estilo.light.buttonSim : estilo.dark.buttonSim]}
                                        onPress={() => excluir()}>
                                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>SIM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[theme == 'light' ? estilo.light.buttonCancelar : estilo.dark.buttonCancelar]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>CANCELAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>     
            
            </View>
        </View>
    )

}

export default EditarVacina;