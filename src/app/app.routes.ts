import { Routes } from '@angular/router';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { GenerationsComponent } from './composants/generations/generations.component';

export const routes: Routes = [
{path: 'generations', component: GenerationsComponent},
    {path: 'pokemons', component: PokemonsComponent}
];