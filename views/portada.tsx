import React, {useEffect, useState, useRef} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

const Portada = () => {
    const navigation = useNavigation();
    const opacity = useRef(new Animated.Value(1)).current;

    const handleEmpezar = () => {
        navigation.navigate('Inicio');
    };
    const startBlinkAnimation = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500, // Duración de la animación
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500, // Duración de la animación
                useNativeDriver: true,
            }),
        ]).start(() => startBlinkAnimation());
    };

    useEffect(() => {
        startBlinkAnimation();

        return () => {
            opacity.setValue(1); 
        };
    }, []);

    return (
        <SafeAreaView style={styles.containedorPortada}>
            
            <View style={styles.content}>
                <View style={styles.imagesContainer}>
                    <Image style={styles.image} source={require("../picture/fire.jpg")} />
                    <Image style={styles.image} source={require("../picture/water.jpg")} />
                    <Image style={styles.image} source={require("../picture/earth.jpg")} />
                </View>
                <View style={styles.centeredContainer}>
                    <Animated.Image style={[styles.imagepokemon, {opacity: opacity}]} source={require("../picture/logopk.png")} />
                    <TouchableOpacity style={styles.button} onPress={handleEmpezar}>
                        <Text style={styles.buttonText}>Empezar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
};
export default Portada;
