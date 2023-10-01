import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-project',
	templateUrl: './card-project.component.html',
	styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
	@Input() image: string = '';
	@Input() title: string = '';
	@Input() description: string = '';
	@Input() codeLink: string = '';
	@Input() demoLink: string = '';
}
