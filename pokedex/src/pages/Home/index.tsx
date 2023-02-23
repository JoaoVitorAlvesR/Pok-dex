import React, { useEffect, useState } from "react";
import * as S from './styles'
import AnimatedLottieView from "lottie-react-native";

import { Button } from "../../components/Button";
import api from "../../service/api";
import { FlatList, Text } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import { FadeAnimation } from "../../components/FadeAnimation";



type Request = {
    id:number;
    types:PokemonType[]
}

export function Home(){

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    useEffect(()=> {
        async function getAllPokemons(){
            const response = await api.get('pokemon?limit=20')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) =>{
                    const {id, types} = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )

            setPokemons(payloadPokemons)
        }

        getAllPokemons()
    },[])
    

    async function getMoreInfo(url:string): Promise<Request>{
        const response = await api.get(url)
        const {id, types} = response.data;

        return {
            id, types
        }
    }
    return <S.Container>
        <FlatList 
        data={pokemons} 
        keyExtractor={pokemon => pokemon.id.toString()} 
        renderItem={({item:pokemon})=>(
            <FadeAnimation>
             <Card data={pokemon} />
            </FadeAnimation>
        )}
        />
    </S.Container>
}