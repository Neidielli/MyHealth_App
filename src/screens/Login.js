import { Button, View, Text, Image, ImageBackground, TouchableOpacity, Appearance } from 'react-native';
import { useState } from 'react'
import { estilo } from './css/Login_sty.js'
import { ActivityIndicator, MD2Colors, Avatar, HelperText, TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const theme = Appearance.getColorScheme()
  const onChangeText = email => setEmail(email)
  const [showInvalidMsg, setShowInvalidMsg] = useState(false);
  const [isLoading, setLoading] = useState(false)

  const goToHome = () => {
    if(!email.includes('@') || password < 8){
      setShowInvalidMsg(true);
    } else {
      setShowInvalidMsg(false);
      props.navigation.navigate('DrawerNavigation', { screen: 'Home' });
    }
  }

  const autenticar = () => {
    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userLogged) => {
      console.log("Logado com sucesso: " + JSON.stringify(userLogged))
      props.navigation.navigate('DrawerNavigation', { screen: 'Home' });
    })
    .catch((error) => {
      console.log("Error on login: " + JSON.stringify(error))
      setShowInvalidMsg(true);
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    
      <View style={theme == 'light' ? estilo.light.body : estilo.dark.body}>
        <ImageBackground
          source={require('../../assets/images/imgFundo2.jpg')}
          resizeMode='cover'
          style={theme == 'light' ? estilo.light.imageBg : estilo.dark.imageBg}
        >
        <ActivityIndicator animating={false} color={MD2Colors.red800} />
        <View style={theme == 'light' ? estilo.light.header : estilo.dark.header}>
          <Image
            style={theme == 'light' ? estilo.light.image : estilo.dark.image}
            source={
              require('../../assets/images/vacina-icone.png')
            } />
          <Text style={theme == 'light' ? estilo.light.headerTitle : estilo.dark.headerTitle}>MyHealth</Text>
        </View>

        <View style={theme == 'light' ? estilo.light.main : estilo.dark.main}>
          <Text style={theme == 'light' ? estilo.light.mainTitle : estilo.dark.mainTitle}>Controle suas vacinas e fique seguro</Text>

          <View style={theme == 'light' ? estilo.light.mainInput : estilo.dark.mainInput}>
            <TextInput
              label="E-mail"
              style={theme == 'light' ? estilo.light.input : estilo.dark.input}
              value={email}
              onChangeText={setEmail} //como uso duas funções?
            />
            {/* <HelperText type="error" visible={hasErrors()}>
              E-mail inválido
            </HelperText> */}
          </View>

          <View style={theme == 'light' ? estilo.light.mainInput : estilo.dark.mainInput}>

            <TextInput
              label="Senha"
              style={theme == 'light' ? estilo.light.input : estilo.dark.input}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
          {showInvalidMsg && <Text style={{ marginTop: 10, fontSize: 20, fontFamily: 'AveriaLibre-Regular', textAlign: 'center', color: '#ff0000' }}>E-mail e/ou senha inválidos</Text>}
         
          

          
        </View> 

        <View style={theme == 'light' ? estilo.light.footer : estilo.dark.footer}>
          <View>
            
            {
              isLoading ?
              <ActivityIndicator color='#ffffff' size={50}/>
              :
              <TouchableOpacity title='Entrar' style={theme == 'light' ? estilo.light.primaryButton : estilo.dark.primaryButton} onPress={() => {autenticar()}}>
                <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Entrar</Text>
              </TouchableOpacity>
            }
            
          </View>
          
          <View>
            <TouchableOpacity style={theme == 'light' ? estilo.light.secondButton : estilo.dark.secondButton} onPress={() => {props.navigation.navigate('CriarConta')}}>
              <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={theme == 'light' ? estilo.light.grayButton : estilo.dark.grayButton} onPress={() => {props.navigation.navigate('RecuperarSenha')}}>
            <Text style={theme == 'light' ? estilo.light.buttonText : estilo.dark.buttonText} >Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

        </ImageBackground>
      </View >
  );
};


export default Login;