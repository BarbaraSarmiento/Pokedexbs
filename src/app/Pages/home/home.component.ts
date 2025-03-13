//COMPONENTE PADRE TS
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokedexViewComponent } from "../../Components/pokedex-view/pokedex-view.component";
import { GraficoComponent } from "../../Components/grafico/grafico.component";
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../Interfaces/Api';
import { NgFor } from '@angular/common';
import { PokedexComponent } from "../../Components/pokedex/pokedex.component";
import { NgModel } from '@angular/forms';
import { Pokemon } from '../../Interfaces/Pokemoninterfas';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokedexViewComponent, GraficoComponent, NgFor, PokedexComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {  // Corrección: implements


  constructor( private pokemonService: PokemonService){}
  @ViewChild('tarjets') tarjetsElement!:ElementRef;

  listaPokemon:Resultado[]=[]

  pagina:number=1;
  cargando:boolean=false;
  pokemonseleccionado?:Pokemon;

  ngOnInit(): void {
    this.cargarLista()
    this.pokemonService.Descripicion("1");
  }

  async cargarLista() {
     // Indica que la carga está en proceso
    this.cargando=true;
    // Obtiene la lista de Pokémon de la página actual y la concatena a la lista existente
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.obtenerPoemon(this.pagina)]
    // Muestra la lista actualizada en la consola
    console.log(this.listaPokemon)
    // Indica que la carga ha finalizado
    this.cargando=false;
     // Incrementa el número de página para la próxima carga
    this.pagina++;
    
  }

  //El parámetro e puede ser cualquier tipo de dato por "any"
  //Any: Puedo poner cualquier cosa aquí
  onScroll(e: any) {
    // Si ya se está cargando datos, no se realiza ninguna acción
    if(this.cargando) return;
   // Comprueba si se ha llegado al final del elemento de desplazamiento
    if (
      //Comprueba si el usuario ha llegado al final del elemento desplazable. 
      Math.round(
        this.tarjetsElement.nativeElement.clientHeight + this.tarjetsElement.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight) {
        // Llama a cargarLista para obtener más Pokémon
      this.cargarLista();
    }
  }

  async TarjetaClick(id:string){
    this.pokemonseleccionado = await this.pokemonService.Descripicion (id);
  }

}