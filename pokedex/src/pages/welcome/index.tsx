import React from "react";
import * as S from './style'
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json"

export function Welcome(){
    return <S.Container>
        <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
        </S.Content>
        <S.Footer>
            <S.Title>Bem Vindo</S.Title>
            <S.Subtitle>Encontre todos os pokemons em um só lugar</S.Subtitle>

        </S.Footer>
    </S.Container>
}