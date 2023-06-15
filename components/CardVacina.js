import {View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Vacina = (props) => {

    const idDocumento = props.id

    const gotoEditar = () => {
        props.navigation.navigate("EditarVacina", {id: idDocumento, vacina: props.vacina, checked: props.checked, dataVacina: props.dataVacina, comprovante: props.comprovante, proxVacina: props.proxVacina})
    }

    return (
            <TouchableOpacity style={styles.container} onPress={() => {gotoEditar()}}>
        
                <Text style={styles.nome}>{props.vacina}</Text>
                <Text style={styles.dose}>{props.checked}</Text>
                <Text style={styles.dataDose}>{props.dataVacina}</Text>

                {
                    props.comprovante ?
                        <Image source={{ uri: props.comprovante }} style={{ width: 165, height: 60, marginLeft: 'auto', marginRight: 'auto' }} />
                        :
                        null
                }
                
                {(props.proxVacina != '') ? 
                    <Text style={styles.proxDose}>Proxima dose: {props.proxVacina}</Text>
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
        marginTop: 5,
    }
})


export default Vacina;