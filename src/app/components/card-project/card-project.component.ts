import { Component, Input } from '@angular/core';
import { IProjectItem } from 'src/app/interfaces/projects/project-item.interface';

@Component({
	selector: 'app-card-project',
	templateUrl: './card-project.component.html',
	styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
	@Input() project: IProjectItem = {} as IProjectItem;
}
