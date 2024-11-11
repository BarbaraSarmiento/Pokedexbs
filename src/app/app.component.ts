import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexViewComponent } from "./Components/pokedex-view/pokedex-view.component";
import { HomeComponent } from './Pages/home/home.component';
import { GraficoComponent } from './Components/grafico/grafico.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexViewComponent,HomeComponent,GraficoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'POKEDEX';
}
