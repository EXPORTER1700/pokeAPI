import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import classes from './current-pokemon.module.scss'
import {firstLatterToUpperCase} from "../../helpers/text";

const CurrentPokemon = () => {
    const {currentPokemon} = useTypedSelector(state => state.pokemon)

    if (!Object.keys(currentPokemon).length) {
        return <p className='title'>Не выбрано</p>
    }

    return (
        <div className={classes.container}>
            <img className={classes.avatar} src={currentPokemon.sprites.front_default}/>
            <p className={classes.title}>{firstLatterToUpperCase(currentPokemon.name)}</p>
            <div className={classes.types}>
                {currentPokemon.types.map(type => <p
                    className={classes.type} key={type.type.name}>{firstLatterToUpperCase(type.type.name)}</p>)}
            </div>
            <div className={classes.stats}>
                {currentPokemon.stats.map(stat =>
                    <p className={classes.stat}
                       key={stat.stat.name}>{firstLatterToUpperCase(stat.stat.name)} : {stat.base_stat}</p>)}
            </div>
        </div>
    );
};

export default CurrentPokemon;