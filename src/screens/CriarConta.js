import { Text, View, TouchableOpacity, Appearance } from 'react-native';
import { estilo } from './css/CriarConta_sty.js'
import { useState } from 'react'
import { RadioButton, TextInput } from 'react-native-paper';
import { auth } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import MaskInput, { Masks } from 'react-native-mask-input';

const CriarConta = (props) => {

    const theme = Appearance.getColorScheme()

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);
    const cleanStates = () =>{
        setNomeCompleto('')
        setGenero('')
        setDataNasc('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
    }

    const cadastrar = () => {
        if (senha !== confirmarSenha) {
            setShowIncorrectPassword(true);
            return;
        } else {            
            const documento = {
                nome: nomeCompleto,
                genero: genero,
                dataNascimento: dataNasc,
                email: email,
                senha: senha,                
            }

            createUserWithEmailAndPassword(auth, email, senha)
            .then((userInfo) => { // informações de credenciais
                // chamado para a criação de documento com os dados do usuario no firestore
    
                var user = userInfo.user // informação do usuario
                const userId = { ...documento, userId: user.uid}; // adiciona o id do usuario ao documento
                const colecao = collection(db, "usuarios");
    
                addDoc(colecao, userId)
                    .then((refDoc) => {
                        console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc))
                        cleanStates()
                    })
                    .catch((error) => {
                        console.log("Error: " + JSON.stringify(error))
                    })
    
    
                console.log("Usuário criado com sucesso: " + JSON.stringify(user))
                props.navigation.navigate('Login');
            })
            .catch((error) => {
                console.log("Erro ao cadastrar usuário: " + JSON.stringify(error))
            })
    
            props.navigation.navigate('Login');
            
        }

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
                           
                            <Text style={theme == 'light' ? estilo.light.textInputGenero : estilo.dark.textInputGenero}>Gênero </Text>
                            
                            <View style={theme == 'light' ? estilo.light.containerRadio : estilo.dark.containerRadio}>
                                <View style={theme == 'light' ? estilo.light.radioDiv : estilo.dark.radioDiv}>
                                    <RadioButton
                                        value="masculino"
                                        color="#419ed7"
                                        uncheckedColor="#fff"                                    
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
                                        status={genero === 'feminino' ? 'checked' : 'unchecked'}
                                        onPress={() => setGenero('feminino')}
                                    />
                                    <Text style={theme == 'light' ? estilo.light.textRadio : estilo.dark.textRadio}>Feminino</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={theme == 'light' ? estilo.light.formDiv : estilo.dark.formDiv}>
                            <Text style={theme == 'light' ? estilo.light.textInput : estilo.dark.textInput}>Data nascimento </Text>
                            <MaskInput
                                style={theme == 'light' ? estilo.light.input : estilo.dark.input}
                                value={dataNasc}
                                onChangeText={setDataNasc}
                                placeholderTextColor="#419ED7"
                                mask={Masks.DATE_DDMMYYYY}
                            />
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

                        <TouchableOpacity style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={() => {cadastrar()}}>
                            <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                
                    </View>

                </View>
        </View>
    )       
}

export default CriarConta;