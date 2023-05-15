import { View, Text, Image, TouchableOpacity, Appearance, Modal } from "react-native";
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
    const [modalVisible, setModalVisible] = useState(true);

    const goToHome = () => {
       
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
                                        onPress={() => excluirVacina(id)}>
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