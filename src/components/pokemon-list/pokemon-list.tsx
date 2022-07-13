import React, {FC} from 'react';
import PokemonListItem from "./pokemon-list-item";
import classes from './pokemon-list.module.scss'
import {IPokemonGeneral} from "../../types/pokemon";

interface IPokemonListProps {
    pokemon: IPokemonGeneral[]
}

const PokemonList: FC<IPokemonListProps> = ({pokemon}) => {

    return (
        <ul className={classes.list}>
            {pokemon.map(item => (
                <PokemonListItem
                    pokemon={item}
                    key={item.url}
                />
            ))}
        </ul>
    );
};

export default PokemonList;