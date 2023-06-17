import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Vacina = (props) => {
    const hoje = new Date().setHours(0, 0, 0, 0);;
    const day = props.proxVacina.split('/')[0];
    const month = props.proxVacina.split('/')[1];
    const year = props.proxVacina.split('/')[2];
    const dateVacina = new Date(year, month -1, day).setHours(0, 0, 0, 0);;

    const vacinasFuturas = dateVacina >= hoje;

    return (
        
            vacinasFuturas ?    
                <TouchableOpacity style={styles.container} >
                    <Text style={styles.nome}>{props.vacina}</Text>
                    <Text style={styles.proxDose}>Proxima dose: {props.proxVacina}</Text>
                </TouchableOpacity>
            :
                null

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        width: '95%',
        height: 80,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'left',
        color: '#3e92c6',
        fontSize: 33,
        marginLeft: 10,
    },
    proxDose: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'left',
        color: '#8B8B8B',
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10,
    }
})


export default Vacina;