import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 1,
           backgroundColor: '#add4d1',
           height: '100%',
        },
        main: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 70,
        },
        inputGroup: {
            marginTop: 45,
            marginLeft: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            rowGap: 10,
            width: '100%',
        },
        formDiv: {
            flexDirection: 'row',
            marginBottom: 20,
            width: '90%',
        },
        radioDiv: {
            flexDirection: 'row',
            marginBottom: 1,
            
        },
        textRadio: {
            marginTop: 5,
            color: 'white',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 0,
        },
        input: {
            width: 220,
            height: 35,
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
        textInput: {
            margin: 5,
            color: 'white',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 'auto',
    
        },
        containerRadio: {
            width: 220,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: "wrap", 
        },
        radio: {
           marginLeft: 25,
        },
        textErro: {
            color: "red",
            fontSize: 16,
            marginTop: -25,
            alignSelf: 'flex-start',
            fontFamily: 'AveriaLibre-Regular',
        },
        erro: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: 14,
            marginTop: 10,
    
        },
        containerImagem: {
            width: 220,
            textAlign: 'center',
            flexDirection: 'column',
            color: 'white',
            fontSize: 15,
        },
        btnComprovante: {
            backgroundColor: '#419ed7',
            textAlign: 'center',
            fontFamily: 'AveriaLibre-Bold',
            width: 130,
            padding: 3,
            color: 'white',
            fontSize: 12,
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 7,
            elevation: 15,
        },
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 150,
               marginTop: 50,
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
            backgroundColor: '#add4d1',
            height: '100%'
        },
        main: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 70,
        },
        inputGroup: {
            marginTop: 45,
            marginLeft: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            rowGap: 10,
            width: '100%',
        },
        formDiv: {
            flexDirection: 'row',
            marginBottom: 20,
            width: '90%',
        },
        radioDiv: {
            flexDirection: 'row',
            marginBottom: -10,
            
        },
        textRadio: {
            marginTop: 5,
            color: 'white',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 0,
        },
        input: {
            width: 230,
            height: 30,
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
        textInput: {
            margin: 5,
            color: 'white',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 'auto',
    
        },
        containerRadio: {
            width: 220,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: "wrap", 
        },
        textErro: {
            color: "red",
            fontSize: 16,
            marginTop: -25,
            alignSelf: 'flex-start',
            fontFamily: 'AveriaLibre-Regular',
        },
        erro: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: 14,
            marginTop: 10,
        },
        containerImagem: {
            width: 220,
            textAlign: 'center',
            flexDirection: 'column',
            color: 'white',
            fontSize: 15,
        },
        btnComprovante: {
            backgroundColor: '#419ed7',
            textAlign: 'center',
            fontFamily: 'AveriaLibre-Bold',
            width: 130,
            padding: 3,
            color: 'white',
            fontSize: 12,
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 7,
            elevation: 15,
        },
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 150,
               marginTop: 50,
               borderRadius: 4,
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