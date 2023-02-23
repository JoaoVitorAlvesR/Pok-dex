import React from "react";
import * as S from './style'
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json"
import { Button } from "../../components/Button";
import {useNavigation} from '@react-navigation/native'

export function Welcome(){

    const {navigate} = useNavigation()

    function handleNavigation(){
        navigate('Home')
    }

    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{width:200}} autoPlay source={pokemonAnimation} loop />
                </S.WrapperImage>
            </S.WrapperAnimation>

            <S.Title>Bem Vindo</S.Title>
            <S.Subtitle>Encontre todos os pokemons em um só lugar</S.Subtitle>
        </S.Content>
        <S.Footer>
           <Button title='inciar' onPress={handleNavigation}/>

        </S.Footer>
    </S.Container>
}