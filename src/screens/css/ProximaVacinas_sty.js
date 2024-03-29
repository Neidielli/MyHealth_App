import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 1,
           backgroundColor: '#add4d1',
           height: '100%',
        },
        header: {
            flex: 1,
        },
        main: {
             flex: 2,
        },
        footer: {
              flex: 1,
        },
        menu: {
            flexDirection: 'row',
        },
        menuHamb: {

        },
        titleHeader: {

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
        header: {
            flex: 1,
        },
        main: {
            flex: 2,
        },
        footer: {
            flex: 1,
        },
        menu: {
            flexDirection: 'row',
        },
        menuHamb: {

        },
        titleHeader: {
            
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