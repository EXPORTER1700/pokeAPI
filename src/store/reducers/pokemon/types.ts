import {IPokemon, IPokemonGeneral, IType} from '../../../types/pokemon';

export interface PokemonState {
    pokemon: IPokemonGeneral[],
    currentPokemon: IPokemon,
    totalCount: number,
    types: IType[],
    isLoading: boolean,
    error: string
}

export enum PokemonActionTypes {
    SET_POKEMON = 'SET_POKEMON',
    SET_CURRENT_POKEMON = 'SET_CURRENT_POKEMON',
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    SET_TYPES = "SET_TYPES",
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetPokemonAction {
    type: PokemonActionTypes.SET_POKEMON
    payload: IPokemonGeneral[]
}

export interface SetCurrentPokemonAction {
    type: PokemonActionTypes.SET_CURRENT_POKEMON
    payload: IPokemon
}

export interface SetTotalCountAction {
    type: PokemonActionTypes.SET_TOTAL_COUNT
    payload: number
}

export interface SetTypesAction {
    type: PokemonActionTypes.SET_TYPES,
    payload: IType[]
}

export interface SetErrorAction {
    type: PokemonActionTypes.SET_ERROR
    payload: string
}

export interface SetIsLoadingAction {
    type: PokemonActionTypes.SET_IS_LOADING
    payload: boolean
}

export type PokemonActions =
    SetPokemonAction
    | SetCurrentPokemonAction
    | SetTotalCountAction
    | SetTypesAction
    | SetErrorAction
    | SetIsLoadingAction
