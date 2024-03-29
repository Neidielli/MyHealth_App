import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

    light: {
        body: {
           flex: 100,
           backgroundColor: '#add4d1',
           height: '100%',
        },
        header: {
            flex: 20,
        },
        main: {
             flex: 90,
        },
        menu: {
            flexDirection: 'row',
        },
        primaryButton: {
               backgroundColor: '#49B976',
               height: 50,
               width: 150,
               marginTop: 5,
               marginBottom: 50,
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
        buttonText: {
               marginTop: 5,
               color: '#FFFFFF',
               fontSize: 25,
               justifyContent: 'center',
               alignSelf: 'center',
               fontFamily: 'AveriaLibre-Regular'
        },
        srcBar: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            marginBottom: 5,
            borderRadius: 1,
            backgroundColor: '#FFFFFF',
    
        }
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
        srcBar: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 1,
    
        }
    },
})

export {estilo}