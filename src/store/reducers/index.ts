import {combineReducers} from 'redux';
import {store} from '../index';
import {pokemonReducer} from './pokemon';

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
