import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 100,
           backgroundColor: '#C1E7E3',
           height: '100%',
        },
        main: {
             flex: 2,
        },
        mainInput: {
            alignItems: 'center'
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
            width: 150,
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