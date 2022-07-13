import React, {ChangeEvent, FC, FormEvent, useCallback, useEffect, useState} from 'react';
import {useActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import classes from './filter.module.scss'
import {firstLatterToUpperCase} from "../../helpers/text";

interface IFilterProps {
    onChange: (key: string, value: string) => void
}

const Filter: FC<IFilterProps> = ({onChange}) => {
    const {getTypes, getCurrentPokemon} = useActions()
    const {types} = useTypedSelector(state => state.pokemon)
    const [search, setSearch] = useState('')

    useEffect(() => {
        getTypes()
    }, [])

    const handleSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange('type', event.target.value)
    }, [])

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }, [])

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        if (search.trim().length) {
            event.preventDefault()
            getCurrentPokemon(search.toLowerCase())
        }
    }, [search])

    return (
        <div className={classes.container}>
            <select onChange={handleSelectChange}>
                <option value='All'>All</option>
                {types.map(type => <option key={type.name}
                                           value={type.name}>{firstLatterToUpperCase(type.name)}</option>)}
            </select>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={handleChange}/>
                <button type="submit">Поиск</button>
            </form>
        </div>
    );
};

export default Filter;