import React, { useEffect, useRef, useState } from "react";
import {SafeAreaView, ScrollView, ActivityIndicator, Pressable, Image } from "react-native";
import axios from "axios";
import FichaListaPersonaje from "../components/FichaListaPokemon";
import styles from "../styles";

export const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
const Inicio = ({ navigation }: { navigation: any }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [cargando, setCargando] = useState(false);
  const refScroll = useRef(null);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  useEffect(()=>{
    setCargando(false);
  }, [pokemonData]);

  const fetchPokemonData = async () => {
    setCargando(true);
    try {
      const response = await axios.get(nextPageUrl);
      const { results, next } = response.data;
      const pokemonDetails = await Promise.all(results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      }));
      setPokemonData(prevData => [...prevData, ...pokemonDetails]);
      setNextPageUrl(next);
    } catch (error) {
      
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
        if(!cargando){
            fetchPokemonData();
        }
    }
  };
  const handlePressPokemon = (codigo:number)=>{
    navigation.navigate('Detalle', {codigo: codigo});
  }

  return (
    <SafeAreaView style={styles.contenedorScroll}>
      <ScrollView 
            style={{height: '97%'}}
            onScroll={handleScroll}
            ref={refScroll}>
        {pokemonData.map((p, index) => (
          <Pressable key={`pokemon-${index + 1}`} onPress={()=>handlePressPokemon(index+1)}>
            <FichaListaPersonaje codigo={index + 1} pokemon={p} />
          </Pressable>
        ))}
        {cargando && <ActivityIndicator size={'large'} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inicio;
