import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 1,
           backgroundColor: '#C1E7E3',
           height: '100%',
        },
        main: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 70,
        },
        inputGroup: {
            marginTop: 45,
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
            borderColor: '1px solid red',
        },
        radioDiv: {
            flexDirection: 'row',
            marginBottom: 20,
            marginLeft: 20,
            width: '80%',
            marginLeft: -35,
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
            width: 200,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: -20,
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
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 250,
               marginTop: 50,
               borderRadius: 4,
               borderColor: '#37BD6D',
               alignSelf: 'center'
        },
        secondButton: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FF8383',
            height: 40,
            width: '35%',
            marginTop: 50,
            marginRight: 5,
            borderRadius: 4,
            borderColor: '#FF8393',
            alignSelf: 'center',
            
        },
        trash:{
            width: 20,
            height:17,
            margin: 13,
        },
        buttonText: {
               marginTop: 5,
               color: '#FFFFFF',
               fontSize: 25,
               justifyContent: 'center',
               alignSelf: 'center',
               fontFamily: 'AveriaLibre-Regular'
        },
        centralView: {
            width: '100%',
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            padding: 25,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 20,
            borderRadius: 5,
        },
        modalButtons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
        },
        modalText: {
            fontSize: 26,
            width: 250,
            marginBottom: 10,
            textAlign: "center",
            color: '#ff8383',
            fontFamily: 'AveriaLibre-Regular'
        },
        buttonSim: {
            backgroundColor: "#ff8383",
            padding: 10,
            borderRadius: 5,
            marginHorizontal: 5,
        },
        buttonCancelar: {
            backgroundColor: "#3f92c6",
            padding: 10,
            borderRadius: 5,
            marginHorizontal: 5,
        },
    },

    dark: {
        body: {
            flex: 100,
            backgroundColor: '#98B5B2',
            height: '100%'
        },
        main: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 70,
        },
        inputsGroup: {
            marginTop: 45,
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
            width: 252,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: -20,   
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
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 250,
               marginTop: 50,
               borderRadius: 4,
               borderColor: '#37BD6D',
               alignSelf: 'center'
        },
        secondButton: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FF8383',
            height: 40,
            width: 150,
            marginTop: 50,
            marginRight: 5,
            borderRadius: 4,
            borderColor: '#FF8393',
            alignSelf: 'center',
            
        },
        trash:{
            width: 20,
            height:17,
            margin: 13,
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