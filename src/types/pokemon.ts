export interface IPokemonGeneral {
    name: string
    url: string
}

type TStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

type TType = {
    type: {
        name: string
    }
}

export interface IPokemon {
    name: string
    id: number
    sprites: {
        front_default: string
    }
    stats: TStat[]
    types: TType[]
}

export interface IType {
    name: string,
    url: string
}