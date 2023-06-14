import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

      light: {
        body: {
           flex: 100,
           backgroundColor: '#C1E7E3',
           height: '100%',
        },
        header: {
            flex: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        main: {
             flex: 50,
             justifyContent: 'center',
             paddingHorizontal: 20,
        },
        text: {

        },
        mainInput: {
             alignItems: 'center'
        },
        inputText: {
              fontSize: 20,
              color: '#FFFFFF',
              fontWeight: 400,
              paddingHorizontal: 5,
              fontFamily: 'AveriaLibre-Regular'
        },
        footer: {
              flex: 30,
        },
        image: {
              height: 50,
              width: 50,
              marginBottom: 100
        },
        imageBg: {
            flex: 1,
            justifyContent: 'center',
            width: '100%',
        },
        input: {
              backgroundColor: '#FFFFFF',
              fontSize: 20,
              fontFamily: 'AveriaLibre-Regular',
              color: '#3F92C5',
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 4,
              marginTop: 25,
              width: 375,
              height: 50,
              fontFamily: 'AveriaLibre-Regular',
        },
        headerTitle: {
              fontSize: 60,
              color: '#419ED7',
              fontWeight: 400,
              fontFamily: 'AveriaLibre-Regular',
              marginBottom: 70
        },
        mainTitle: {
              fontSize: 45,
              textAlign: 'center',
              color: '#419ED7',
              fontWeight: 400,
              fontFamily: 'AveriaLibre-Regular',

        },
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 150,
               marginTop: 20,
               shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 7,
                elevation: 5,
                borderRadius: 5,
               borderColor: '#37BD6D',
               alignSelf: 'center'
        },
        secondButton: {
               backgroundColor: '#419ED7',
               height: 50,
               width: 150,
               marginTop: 20,
               shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 7,
                elevation: 5,
                borderRadius: 5,
               borderColor: '#37BD6D',
               alignSelf: 'center'
        },
        grayButton: {
               backgroundColor: '#B5C7D1',
               height: 50,
               width: 200,
               marginTop: 30,
               shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 7,
                elevation: 5,
                borderRadius: 5,
               borderColor: '#B0CCDE',
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
        header: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        main: {
            flex: 2,
            justifyContent: 'center',
            paddingHorizontal: 20,
        },
        text: {

        },
        mainInput: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        inputText: {
            fontSize: 20,
            color: '#FFFFFF',
            fontWeight: 400,
            paddingHorizontal: 5,
            fontFamily: 'AveriaLibre-Regular'
        },
        footer: {
            flex: 1,
        },
        image: {
            height: 50,
            width: 50,
            marginBottom: 100
        },
        imageBg: {
            flex: 1,
            justifyContent: 'center',
            width: '100%',
        },
        input: {
            backgroundColor: '#E6E6E6',
            fontSize: 20,
            fontFamily: 'AveriaLibre-Regular',
            color: '#80B0CE',
            borderColor: '#E6E6E6',
            borderWidth: 1,
            borderRadius: 4,
            marginTop: 25,
            width: 375,
            fontFamily: 'AveriaLibre-Regular'
        },
        headerTitle: {
            marginBottom: 5,
            fontSize: 60,
            color: '#44A6E3',
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
            marginBottom: 50
        },
        mainTitle: {
            fontSize: 45,
            textAlign: 'center',
            color: '#419ED7',
            fontWeight: 400,
            fontFamily: 'AveriaLibre-Regular',
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
        secondButton: {
             backgroundColor: '#419ED7',
             height: 50,
             width: 150,
             marginTop: 50,
             borderRadius: 3,
             borderColor: '#37BD6D',
             alignSelf: 'center'
        },
        grayButton: {
              backgroundColor: '#B5C7D1',
              height: 50,
              width: 200,
              marginTop: 120,
              borderRadius: 3,
              borderColor: '#B0CCDE',
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