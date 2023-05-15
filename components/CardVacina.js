import {View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Vacina = (props) => {

    const gotoEditar = () => {
        props.navigation.navigate('EditarVacina', {item: props.item})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={gotoEditar}>
        
            <Text style={styles.nome}>{props.item.nome}</Text>
            <Text style={styles.dose}>{props.item.dose}</Text>
            <Text style={styles.dataDose}>{props.item.dataAplicacao}</Text>
            
            <Image source={props.item.comprovante} style={{ width: 165, height: 60, marginLeft: 'auto', marginRight: 'auto' }} />
            {(props.item.proximaAplicacao != '') ? 
                <Text style={styles.proxDose}>Proxima dose: </Text>
                :
                <Text style={styles.proxDose}>Não há próxima dose</Text>
            }

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        width: '45%',
        height: '90%',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        color: '#3e92c6',
        fontSize: 26,
    },
    dose: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#3e92c6',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        fontSize: 20,
        borderRadius: 5,
    },
    dataDose: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        color: '#3e92c6',
    },
    proxDose: {
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        color: 'red',
        fontSize: 10,
    }
})


export default Vacina;