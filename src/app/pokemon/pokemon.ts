export interface PokemonInterface {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
}

export class Pokemon implements PokemonInterface {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(pokemonData: PokemonInterface) {
        Object.assign(this, pokemonData);
    }
}
