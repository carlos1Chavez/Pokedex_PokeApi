import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //estilos de la portada
    containedorPortada: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    content: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
    },
    centeredContainer: {
        ...StyleSheet.absoluteFillObject, 
        justifyContent: 'center',
        alignItems: 'center',
      },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 550,
        height: 265,
        
    },
    imagepokemon: {
        width: 300,
        height: 100,
    },
    imagesContainer: {
        flexDirection: 'column',
        justifyContent: 'center', // Centrar horizontalmente las imágenes en el contenedor
        alignItems: 'center', // Centrar verticalmente las imágenes en el contenedor   
    },
    //estilos para la lista y el detalle
    contenedorFicha:{
        flex: 1,
        backgroundColor:'#ABEBC6',
        display:'flex',
        flexDirection:'row',
        marginBottom: 5,
        padding: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#341257',
        borderRadius:30,
        marginHorizontal:15,
    },
    contenedorDatosGenerales: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', /* Centra verticalmente */
        alignItems: 'center', /* Centra horizontalmente */
    },
    nombreEnFicha:{
        fontSize:24,
        color:'#332811',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    datosGeneralFicha: {
        fontSize:25,
    },
    PokemonEnFicha: {
        height: 150,
        width: 150,
        marginRight: 20,
    },
    contenedorScroll: {
        display: 'flex',
        flexDirection: 'column',
    },
    ViewDetalle: {
        alignItems: 'center',
    },    
    fotoPokemonEnDetalle: {
        height: 250,
        width: 250,
    },
    contenedorDetalle: {
        backgroundColor: '#ABEBC6',
        flexDirection: 'column', // Establecer la dirección de los elementos en fila
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        width: 350, // Ancho de 300 unidades
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorDetalle2: {
        backgroundColor: '#ABEBC6',
        flexDirection: 'column', // Establecer la dirección de los elementos en fila
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        width: 350, // Ancho de 300 unidades
        height:90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fondoEnFicha: {
        backgroundColor: '#FADBD8',
        flex: 1,
    },
    nombreEndetalle:{
        fontSize:25,
        color:'#332811',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    nombreAbilidades:{
        fontSize:25,
        color:'#332811',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
});
export default styles;