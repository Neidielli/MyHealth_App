import { Text, View, TouchableOpacity, Appearance } from 'react-native';
import { estilo } from './css/CriarConta_sty.js'
import { useState } from 'react'
import { RadioButton, TextInput } from 'react-native-paper';
// import MaskInput from 'react-native-mask-input';

const CriarConta = (props) => {

    const theme = Appearance.getColorScheme()

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [genero, setGenero] = useState('');
    const [dataVacina, setDataVacina] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);

    const cadastro = () => {
        if (senha !== confirmarSenha) {
            setShowIncorrectPassword(true);
            return;
        }
        props.navigation.navigate('Login');
    }

    return (
        <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>

                <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
                    <View style={theme == 'light' ? estilo.light.inputGroup : estilo.dark.inputGroup}>


                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Nome Completo </Text>
                            <TextInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={nomeCompleto}
                                onChangeText={setNomeCompleto}
                                placeholderTextColor="#419ED7"
                            />
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <View>
                                <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Gênero </Text>
                            </View>
                            

                            <View style={theme == 'light' ? estilo.light.containerRadio : estilo.dark.containerRadio}>
                                <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                    <RadioButton
                                        value="masculino"
                                        color="#419ed7"
                                        uncheckedColor="#fff"
                                        style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                        status={genero === 'masculino' ? 'checked' : 'unchecked'}
                                        onPress={() => setGenero('masculino')}
                                    />
                                    <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>Masculino</Text>
                                </View>

                                <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                    <RadioButton
                                        value="feminino"
                                        color="#419ed7"
                                        uncheckedColor="#fff"
                                        style={theme == 'light' ? estilo.light.radio : estilo.dark.radio}
                                        status={genero === 'feminino' ? 'checked' : 'unchecked'}
                                        onPress={() => setGenero('feminino')}
                                    />
                                    <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>Feminino</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Data nascimento </Text>
                            {/* <MaskInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={dataVacina}
                                onChangeText={setDataVacina}
                                // mask={Masks.DATE_DDMMYYYY}
                            /> */}
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>E-mail </Text>
                            <TextInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor="#419ED7"
                            />
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Senha </Text>
                            <TextInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={senha}
                                secureTextEntry={true}
                                onChangeText={setSenha}
                                placeholderTextColor="#419ED7"
                            />
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Repetir Senha </Text>
                            <TextInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={confirmarSenha}
                                secureTextEntry={true}
                                onChangeText={setConfirmarSenha}
                                placeholderTextColor="#419ED7"
                            />
                        </View> 
        
                        <View style={theme == 'light' ? estilo.light.erro : estilo.dark.erro}>
                            {showIncorrectPassword && <Text style={theme == 'light' ? estilo.light.textErro : estilo.dark.textErro}>Senha não confere!</Text>}
                        </View> 

                        <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton}>
                            <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} onPress={cadastro}>Cadastrar</Text>
                        </TouchableOpacity>
                
                    </View>

                </View>
        </View>
    )       
}

export default CriarConta;