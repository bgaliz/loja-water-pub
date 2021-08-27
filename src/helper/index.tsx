export function handleUpperCaseFirstCaracter(pokemonName: string): string | undefined {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
}

export function returnPrice (value) {
    return value.replace(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/,'1')
}