import axios from 'axios'

const URL_POKEAPI = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: `${URL_POKEAPI}`,
})

export default api
