import React, {useState, useEffect } from "react";
import { Text, View, SafeAreaView, Image} from "react-native";
import axios from "axios";
import Pokemon from "../types/Pokemon";
import styles from "../styles";
import { urlBase } from "./Inicio";

const Detalle = ({ route }: { route: any }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [codigo, setCodigo] = useState<number>(0);

    const cargarPokemon = async () => {
        const codigoParam = route.params.codigo;
        setCodigo(codigoParam);
        const res = await axios.get(`${urlBase}/${codigoParam}`);
        if (res.data) {
            setPokemon(res.data);
        }
    }
    useEffect(() => {
        cargarPokemon();
    }, []);
    return (
        <View style={styles.fondoEnFicha}>
            <SafeAreaView >
            <View style={styles.ViewDetalle}>
                <Image
                    style={styles.fotoPokemonEnDetalle}
                    source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${codigo}.png`}}
                />
                <View style={styles.contenedorDetalle}>
                    <View>
                        <Text style={styles.nombreEndetalle}>codigo:   {pokemon?.id}</Text>
                        <Text style={styles.nombreEndetalle}>Nombre:   {pokemon?.name}</Text>
                        <Text style={styles.nombreEndetalle}>Altura:   {pokemon?.height} Centimetros</Text>
                        <Text style={styles.nombreEndetalle}>Peso:   {pokemon?.weight} Libras</Text>
                         
                    </View>
                    
                </View>
                <View >
                    <Text style={styles.nombreAbilidades }>Tipo:</Text>
                    <View style={styles.contenedorDetalle2}>
                    {pokemon?.types.map((type, index) => (
                        <Text key={index} style={[styles.nombreEndetalle, { marginRight: 8 }]}>
                        {type.type.name}
                        </Text>
                        ))}
                    </View>
                </View>
                <View>
                    <Text style={styles.nombreAbilidades }>Abilidades:</Text>
                    <View style={styles.contenedorDetalle2}>
                        {pokemon?.abilities.slice(0, 4).map((ability, index) => (
                            <Text key={index} style={[styles.nombreEndetalle, { marginRight: 8 }]}>
                            {ability.ability.name}</Text>
                        ))}
                    </View>
                </View>
                </View>
            </SafeAreaView>
        </View>  
    );
}
export default Detalle;
