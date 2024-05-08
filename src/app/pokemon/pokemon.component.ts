import { Component, OnInit  } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
	pokemons: any[] = [];
	constructor(private pokemonService: PokemonService) { }
	ngOnInit(): void {
    	this.getPokemons();
  	}

	getPokemons(): void {
		this.pokemonService.getPokemons()
			.subscribe(response => {
				this.pokemons = response.results;
			});
	}
}
