import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-tec',
	templateUrl: './card-tec.component.html',
	styleUrls: ['./card-tec.component.css'],
})
export class CardTecComponent {
	colorStarFill: string = '';
	@Input() starCount: number = 1;
	@Input() cardTitle: string = '';
	@Input() cardImage: string = '';
}
