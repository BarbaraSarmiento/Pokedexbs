//Pokemon. service
import { Injectable } from '@angular/core';
import { Resultado } from '../Interfaces/Api';
import { Pokemon } from '../Interfaces/Pokemoninterfas';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async obtenerPoemon (page:number, limite:number=100): Promise<Resultado[]> {  // Cambié el tipo de retorno a un array de Resultado
    const offset = limite*(page-1)
    const res=await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`)
    const resJson = await res.json();
    if (resJson.results.length > 0) return resJson.results // Devuelve un array de resultados
    return[];
  }
  async Descripicion (id: string): Promise <Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
  }
  

  Identificacion(){
  }
}
