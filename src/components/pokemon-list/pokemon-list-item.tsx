import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {IPokemon, IPokemonGeneral} from "../../types/pokemon";
import {firstLatterToUpperCase} from "../../helpers/text";
import classes from './pokemon-list.module.scss'
import axios from "axios";
import {FetchURL} from "../../constants/url";
import {useActions} from "../../hooks/useAction";

interface IPokemonListItemProps {
    pokemon: IPokemonGeneral
}

const PokemonListItem: FC<IPokemonListItemProps> = ({pokemon}) => {
    const {getCurrentPokemon} = useActions()
    const [currentPokemon, setCurrentPokemon] = useState({} as IPokemon)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const onMount = async () => {
            try {
                const {data} = await axios.get(FetchURL.pokemon + pokemon.name)
                setCurrentPokemon(data)
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Pokemon: ${error.message}`)
                }
            } finally {
                setIsLoading(false)
            }
        }
        onMount()
    }, [])

    const name = useMemo(() => {
        if (currentPokemon.name) {
            return firstLatterToUpperCase(currentPokemon.name)
        }
    }, [currentPokemon])

    const handleClick = useCallback(() => {
        getCurrentPokemon(pokemon.name)
    }, [])

    if (isLoading) {
        return null
    }
    return (
        <div className={classes.item}>
            <div className={classes.wrapper} onClick={handleClick}>
                <img
                    src={currentPokemon.sprites.front_default}
                />
                <p className={classes.name}>{name}</p>
            </div>
        </div>
    );
};

export default PokemonListItem;