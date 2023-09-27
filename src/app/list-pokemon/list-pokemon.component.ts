import { Component } from '@angular/core';

import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon)
    {
      console.log(`Tu as cliqué sur : ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else
    {
      console.log(`Tu as cliqué sur un Pokémon qui n'existe pas !`);
      this.pokemonSelected = undefined;
    }
  }
}
