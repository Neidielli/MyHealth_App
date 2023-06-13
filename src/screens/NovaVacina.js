import { View, Text, TouchableOpacity, Appearance, Image } from "react-native";
import { estilo } from './css/NovaVacina_sty.js'
import { useState } from "react";
import { TextInput, RadioButton } from 'react-native-paper';
import  v4  from 'uuid';
import { launchImageLibrary } from 'react-native-image-picker'
import MaskInput, { Masks } from 'react-native-mask-input';
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config.js";


const NovaVacina = (props) => {

    // function novaVacina() {
    //     props.navigation.navigate('Home', {
    //         itemAdicionar: {
    //             id: v4,
    //             nome: nome,
    //             dataAplicacao: dataVacina,
    //             dose: checked,
    //             proximaAplicacao: proxVacina,
    //             comprovante: comprovanteVacina,
    //         }
    //     })
    //     setDataVacina('')
    //     setProxVacina('')
    //     setNome('')
    //     setChecked('')
    // }

    const [dataVacina, setDataVacina] = useState('');
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState('');
    const theme = Appearance.getColorScheme()
    const cleanStates = () =>{
        setDataVacina('')
        setProxVacina('')
        setNome('')
        setChecked('')
    }

    const cadastrar = () => {
        const colecao = collection(db, "vacinas");
        const documento = {
            dataVacina: dataVacina,
            vacina: nome,
            dose: checked,
            comprovante: comprovante,
            proxVacina: proxVacina
        }

        addDoc(colecao, documento)
            .then((refDoc) => {
                console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc))
                cleanStates()
            })
            .catch((error) => {
                console.log("Error: " + JSON.stringify(error))
            })
    }

    const goToHome = () => {
        props.navigation.navigate('Home');
    }

    function comprovanteVacina() {
        launchImageLibrary({ noData: true }, (response) => {
            if (response) {
                if (response.didCancel !== true) {
                    setComprovante(response.assets[0].src);
                    console.log(response.assets[0].src)
                }
            }
        });
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
        

            <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                <View style={theme == 'light' ? estilo.light.inputGroup : estilo.dark.inputGroup}>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Data de vacinação </Text>
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
                                    value="1a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
                                    status={checked === '1a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('1a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>1a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="2a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
                                    status={checked === '2a Dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('2a Dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>2a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="3a Dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    
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
                        <TouchableOpacity onPress={() => comprovanteVacina}>
                                <Text style={theme == 'light' ? estilo.light.btnComprovante : estilo.dark.btnComprovante}>Selecionar imagem...</Text>
                            </TouchableOpacity>
                            {
                                (comprovanteVacina != '') ?
                                    <Image source={{src: comprovante}}/>
                                :
                                setComprovante(require('../../assets/images/sair.png')) && <Image  source={{src: comprovante}} style={{ marginTop: 20, width: 200, height: 100 }}/>
                            }
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
                
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={cadastrar}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>     
            
            </View>
        </View>
    )

}

export default NovaVacina;