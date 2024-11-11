import { NgFor, NgIf } from '@angular/common';
import { Component,Input, OnChanges, Output } from '@angular/core';
import { Resultado } from '../../Interfaces/Api';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf,NgFor,CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent implements OnChanges {

  constructor(private pokemonService:PokemonService){}

  ngOnChanges(): void {
    this.extraerinformacion()

  }

  //ID no tiene nada todavia, recibe datos, y solo puede contener al Resultado
  @Input () data?:Resultado;
  @Output() clickeado = new EventEmitter<string>();
  @Input() Seleccionado:boolean = false;
  id:string="0";

  extraerinformacion(){
    if(this.data){
      //GUARDAR LA INFORMACION EN "ID"
      this.id=this.data.url.substring(34,this.data.url.length-1);
      this.pokemonService.Descripicion(this.id);
    }
  }
  
}
