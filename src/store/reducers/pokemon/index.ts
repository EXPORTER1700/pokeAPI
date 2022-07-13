import {PokemonActions, PokemonActionTypes, PokemonState} from './types';
import {IPokemon, IPokemonGeneral, IType} from '../../../types/pokemon';

const initialState: PokemonState = {
    pokemon: [] as IPokemonGeneral[],
    currentPokemon: {} as IPokemon,
    totalCount: 0,
    types: [] as IType[],
    isLoading: false,
    error: '',
};

export const pokemonReducer = (state = initialState, action: PokemonActions): PokemonState => {
    switch (action.type) {
        case PokemonActionTypes.SET_POKEMON:
            return {...state, pokemon: action.payload};
        case PokemonActionTypes.SET_CURRENT_POKEMON:
            return {...state, currentPokemon: action.payload}
        case PokemonActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case PokemonActionTypes.SET_TYPES:
            return {...state, types: action.payload}
        case PokemonActionTypes.SET_ERROR:
            return {...state, error: action.payload};
        case PokemonActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};
