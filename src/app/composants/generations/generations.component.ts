import { Component } from '@angular/core';


@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})
export class GenerationsComponent {

  generations: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

}
