export interface waterPokemonsModel {
    pokemon: {
        name: string,
        url: string
    }
}

export interface PokemonResponseModel {
    abilities: []
    base_experience: number
    forms: []
    game_indices: []
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: []
    name: string
    order: number
    past_types: []
    species: {name: string, url: string}
    sprites: {},
    stats: [],
    types: [],
    weight: number,
}