import {PokemonActions, PokemonActionTypes} from './types';
import {AppDispatch} from "../index";
import {IPokemon, IPokemonGeneral, IType} from "../../../types/pokemon";
import axios from "axios";
import {FetchURL} from "../../../constants/url";

export const pokemonActionCreators = {
    setPokemon: (payload: IPokemonGeneral[]): PokemonActions => ({type: PokemonActionTypes.SET_POKEMON, payload}),
    setCurrentPokemon: (payload: IPokemon): PokemonActions => ({
        type: PokemonActionTypes.SET_CURRENT_POKEMON,
        payload
    }),
    setTotalCount: (payload: number): PokemonActions => ({type: PokemonActionTypes.SET_TOTAL_COUNT, payload}),
    setTypes: (payload: IType[]): PokemonActions => ({type: PokemonActionTypes.SET_TYPES, payload}),
    setError: (payload: string): PokemonActions => ({type: PokemonActionTypes.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): PokemonActions => ({type: PokemonActionTypes.SET_IS_LOADING, payload}),
    getAllPokemon: (from: number) => async (dispatch: AppDispatch) => {
        dispatch(pokemonActionCreators.setIsLoading(true))

        try {
            const {data} = await axios.get(FetchURL.pokemon + `?limit=20&offset=${from}`)

            dispatch(pokemonActionCreators.setPokemon(data.results))
            dispatch(pokemonActionCreators.setTotalCount(data.count))
            dispatch(pokemonActionCreators.setIsLoading(false))
        } catch (error) {
            if (error instanceof Error) {
                dispatch(pokemonActionCreators.setError(error.message))
            }
        }
    },
    getCurrentPokemon: (param: string) => async (dispatch: AppDispatch) => {
        dispatch(pokemonActionCreators.setIsLoading(true))

        try {
            const {data} = await axios.get(FetchURL.pokemon + param)

            dispatch(pokemonActionCreators.setCurrentPokemon(data))
            dispatch(pokemonActionCreators.setIsLoading(false))
        } catch (error) {
            if (error instanceof Error) {
                dispatch(pokemonActionCreators.setError(error.message))
            }
        }
    },
    getAllPokemonByType: (type: string) => async (dispatch: AppDispatch) => {
        dispatch(pokemonActionCreators.setIsLoading(true))

        try {
            const {data} = await axios.get(FetchURL.type + type)
            const result = data.pokemon.map((item: any) => item.pokemon)

            dispatch(pokemonActionCreators.setPokemon(result))
            dispatch(pokemonActionCreators.setTotalCount(result.length))
            dispatch(pokemonActionCreators.setIsLoading(false))
        } catch (error) {
            if (error instanceof Error) {
                dispatch(pokemonActionCreators.setError(error.message))
            }
        }
    },
    getTypes: () => async (dispatch: AppDispatch) => {
        dispatch(pokemonActionCreators.setIsLoading(true))

        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/type`)

            dispatch(pokemonActionCreators.setTypes(data.results))
            dispatch(pokemonActionCreators.setIsLoading(false))
        } catch (error) {
            if (error instanceof Error) {
                dispatch(pokemonActionCreators.setError(error.message))
            }
        }
    }
};
