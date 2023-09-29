import { Component } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
	titleMain: string = 'Projetos';
	descriptionMain: string =
		'Está área contém alguns de meus projetos destaques.';
}
