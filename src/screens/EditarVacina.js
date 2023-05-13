import { View, Text, TouchableOpacity, Appearance } from "react-native";
import { estilo } from './css/EditarVacina_sty.js'
import { useState } from "react";
import {TextInput, RadioButton } from 'react-native-paper';

const EditarVacina = (props) => {

    const theme = Appearance.getColorScheme()

    const [dataVacina, setDataVacina] = useState('');
    const [vacina, setVacina] = useState('');
    const [genero, setDose] = useState('');
    // const [dataVacina, setDataVacina] = useState('');
    const [comprovante, setComprovante] = useState('');
    const [senha, setSenha] = useState('');

    const goToHome = () => {
        props.navigation.navigate('Home');
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
        

            <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>

                <View style={theme == 'light' ? estilo.light.inputGroup : estilo.dark.inputGroup}>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Data de vacinação </Text>
                        <TextInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={dataVacina}
                            onChangeText={setDataVacina}
                            placeholderTextColor="#419ED7"
                        />
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Vacina </Text>
                        <TextInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={vacina}
                            onChangeText={setVacina}
                            placeholderTextColor="#419ED7"
                        />
                    </View>

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <View>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Dose </Text>
                        </View>
                        

                        <View style={theme == 'light' ? estilo.light.containerRadio : estilo.dark.containerRadio}>
                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="masculino"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={genero === 'masculino' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('masculino')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>1a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="masculino"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={genero === 'masculino' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('masculino')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>2a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="masculino"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={genero === 'masculino' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('masculino')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>3a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="feminino"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={genero === 'feminino' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('feminino')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>Dose única</Text>
                            </View>
                        </View>
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Comprovante </Text>
                        <TextInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={comprovante}
                            onChangeText={setComprovante}
                            placeholderTextColor="#419ED7"
                        />
                    </View> 

                    <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                        <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Próxima vacina </Text>
                        {/* <MaskInput
                            style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                            value={dataVacina}
                            onChangeText={setDataVacina}
                            // mask={Masks.DATE_DDMMYYYY}
                        /> */}
                    </View> 
                
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                        <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={goToHome}>Salvar alterações</Text>
                    </TouchableOpacity>

                </View>     
            
            </View>
        </View>
    )

}

export default EditarVacina;