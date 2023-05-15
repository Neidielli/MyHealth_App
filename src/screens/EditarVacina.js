import { View, Text, Image, TouchableOpacity, Appearance, Modal } from "react-native";
import { estilo } from './css/EditarVacina_sty.js'
import { useEffect, useState } from "react";
import {TextInput, RadioButton } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';

const EditarVacina = (props) => {

    function excluir() {
        setModalVisible(!modalVisible)
        props.navigation.navigate('Home', {idApagar: id})
    }

    function editar() {
        props.navigation.navigate('Home', {
            itemEditar: {
                id: id,
                nome: nome,
                dataAplicacao: dataVacina,
                dose: checked,
                proximaAplicacao: proxVacina,
                comprovante: comprovante,
            }
        })
    }
    const theme = Appearance.getColorScheme()
    const [modalVisible, setModalVisible] = useState(false);

    const [dataVacina, setDataVacina] = useState('');
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState('');
    const [id, setId] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState('');

    // pega o que tá no props e coloca nos estados - hook react
    useEffect(() => {
        setDataVacina(props.route.params.item.dataVacina)
        setNome(props.route.params.item.nome)
        setChecked(props.route.params.item.checked)
        setId(props.route.params.item.id)
        setProxVacina(props.route.params.item.proxVacina)
        setComprovante(props.route.params.item.comprovante)
    })

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
                            value={nome}
                            onChangeText={setNome}
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
                                    value="1a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '1a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('1a. dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>1a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="2a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '2a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('2a. dose')}
                                />
                                <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>2a. dose</Text>
                            </View>

                            <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                <RadioButton
                                    value="3a. dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                    status={checked === '3a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('3a. dose')}
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
                        
                        <View>
                            <TouchableOpacity>
                                <Text>Selecionar imagem...</Text>
                            </TouchableOpacity>
                            {
                                (comprovante != '') ?
                                    <Image/>
                                :
                                setComprovante() && <Image style={{ marginTop: 20, width: 200, height: 100 }}/>
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
                
                    
                    <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={() => editar()}> 
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
                                        onPress={() => excluir(id)}>
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