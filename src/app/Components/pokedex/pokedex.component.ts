//COMPONENTE HIJO
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../Interfaces/Api';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {

constructor(private pokemonService:PokemonService){}
}

