import { Component, Input } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/project-data.interface';

@Component({
	selector: 'app-card-project',
	templateUrl: './card-project.component.html',
	styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
	@Input() project: IProjectData = {} as IProjectData;
}
