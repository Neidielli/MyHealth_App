import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 100,
           backgroundColor: '#C1E7E3',
           height: '100%',
        },
        main: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        mainInput: {
            alignItems: 'center'
        },
        formDiv: {
            flexDirection: 'row',
            marginBottom: 90,          
        },
        textInput: {
            marginTop: 10,
            color: 'white',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 'auto',   
        },
        input: {
            width: 300,
            height: 40,
            fontSize: 20,
            color: '#3F92C5',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 4,
            marginTop: 3,
            fontFamily: 'AveriaLibre-Regular',
            backgroundColor: 'white',
            paddingBottom: 5,
    
        },
        inputText: {
            width: 250,
            height: 30,
            fontSize: 15,
            color: '#419ED7',
            borderColor: 'white',
            borderWidth: 1,
            fontFamily: 'AveriaLibre-Bold',
            backgroundColor: 'white',
            paddingBottom: 5,
        },
        erro: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            // marginBottom: 14,
            // marginTop: 10,
    
        },
        textErro: {
            color: "red",
            fontSize: 16,
            marginTop: -25,
            alignSelf: 'flex-start',
            fontFamily: 'AveriaLibre-Regular',
        }, 
        primaryButton: {
            backgroundColor: '#49B976',
            height: 50,
            width: 250,
            marginTop: 20,
            borderRadius: 4,
            borderColor: '#37BD6D',
            alignSelf: 'center'
        },
        buttonText: {
            marginTop: 5,
            color: '#FFFFFF',
            fontSize: 25,
            justifyContent: 'center',
            alignSelf: 'center',
            fontFamily: 'AveriaLibre-Regular'
        },
    },

    dark: {
        body: {
            flex: 100,
            backgroundColor: '#98B5B2',
            height: '100%'
        },
        main: {
            flex: 2,
        },
        mainInput: {
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 100,
        },
        inputText: {
            width: 250,
            height: 30,
            fontSize: 15,
            color: '#419ED7',
            borderColor: 'white',
            borderWidth: 1,
            fontFamily: 'AveriaLibre-Bold',
            backgroundColor: 'white',
            paddingBottom: 5,
        },
        primaryButton: {
            backgroundColor: '#49B976',
            height: 50,
            width: 130,
            marginTop: 50,
            borderRadius: 3,
            borderColor: '#37BD6D',
            alignSelf: 'center'
        },
        buttonText: {
            marginTop: 5,
            color: '#FFFFFF',
            fontSize: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            fontFamily: 'AveriaLibre-Regular'
        },
    },
})

export {estilo}