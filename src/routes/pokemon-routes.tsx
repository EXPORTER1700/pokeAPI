import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {RoutesEnum} from '../constants/routes';
import Layout from '../pages/layout';
import PokemonPage from "../pages/pokemon/pokemon";

function PokemonRoutes() {
    return (
        <Routes>
            <Route path={RoutesEnum.index} element={<Layout/>}>
                <Route index element={<PokemonPage/>}/>
            </Route>
        </Routes>
    );
}

export default PokemonRoutes;
