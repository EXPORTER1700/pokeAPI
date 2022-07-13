import React, {useEffect, useMemo, useState} from 'react';
import PokemonList from "../../components/pokemon-list/pokemon-list";
import {useActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";
import classes from './pokemon.module.scss'
import CurrentPokemon from "../../components/current-pokemon/current-pokemon";

const PokemonPage = () => {
    const {getAllPokemon, getAllPokemonByType} = useActions()
    const {pokemon, totalCount} = useTypedSelector(state => state.pokemon)
    const [filter, setFilter] = useState({type: 'All'})
    const [range, setRange] = useState({from: 0, to: 20})
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getAllPokemon(range.from)
    }, [])

    useEffect(() => {
        if (filter.type === 'All') {
            getAllPokemon(0)
        } else {
            getAllPokemonByType(filter.type)
        }
        setRange({from: 0, to: 20})
        setCurrentPage(1)
    }, [filter.type])

    const renderPokemon = useMemo(() => {
        if (filter.type === 'All') {
            return pokemon
        } else {
            const to = range.to >= totalCount ? totalCount : range.to

            return pokemon.slice(range.from, to)
        }
    }, [filter.type, pokemon, range])

    const handleFilterChange = (key: string, value: string) => {
        setFilter(prevState => ({...prevState, [key]: value}))
    }

    const handlePaginationClick = (page: number) => {
        const from = page * 20 - 20
        const to = page * 20 >= totalCount ? totalCount : page * 20
        const newRange = {from, to}

        if (filter.type === 'All') {
            getAllPokemon(from)
        }

        setRange(newRange)
        setCurrentPage(page)
    }

    return (
        <div className={classes.container}>
            <div className={classes.allPokemon}>
                <Filter onChange={handleFilterChange}/>
                <PokemonList pokemon={renderPokemon}/>
                <Pagination currentPage={currentPage} total={totalCount} onClick={handlePaginationClick}/>
            </div>
            <div className={classes.currentPokemon}>
                <CurrentPokemon/>
            </div>
        </div>
    );
};

export default PokemonPage;