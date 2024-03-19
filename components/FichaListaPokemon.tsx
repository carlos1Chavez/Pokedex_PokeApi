import React from "react";
import People from "../Types/Pokemon";
import { View, Text, Image } from "react-native";
import styles from "../styles";

type FichaListaPokemonProps = {
  pokemon: People;
};

const FichaListaPokemon = ({ pokemon }: FichaListaPokemonProps) => {
  return (
    <View style={styles.fondoEnFicha}>
        <Text></Text>
        <View style={styles.contenedorFicha}>
        <Image style={styles.PokemonEnFicha} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${pokemon.id}.png`}}/>
        <View style={styles.contenedorDatosGenerales}>
          <Text style={styles.nombreEnFicha}>{pokemon.name}</Text>
          <Text style={styles.datosGeneralFicha}>Código: {pokemon.id}</Text>
        </View>
      </View>
    </View>
  );
};
export default FichaListaPokemon;
