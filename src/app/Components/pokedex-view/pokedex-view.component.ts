import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgIf } from '@angular/common';
import { Pokemon } from '../../Interfaces/Pokemoninterfas';
@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent,GraficoComponent, NgIf],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {

  constructor(private pokemonService:PokemonService){}

  @Input () pokemon?:Pokemon;
  
}
