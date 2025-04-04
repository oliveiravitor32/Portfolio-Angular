import { Component, Input } from '@angular/core';
import { IEducationData } from 'src/app/interfaces/education/education-data.interface';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
	@Input({ required: true }) educationData!: IEducationData;
}
