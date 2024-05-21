export interface PokemonInterface {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
}

export class Pokemon {
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

// export class Pokemon {
//     constructor(
//     public id: number,
//     public hp: number,
//     public cp: number,
//     public name: string,
//     public picture: string,
//     public types: Array<string>,
//     public created: Date,
//     ) {}
// }