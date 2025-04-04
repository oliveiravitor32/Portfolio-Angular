import { Component, Input } from '@angular/core';
import { IEducationItem } from 'src/app/interfaces/education/education-item.interface';

@Component({
	selector: 'app-timeline-item',
	templateUrl: './timeline-item.component.html',
	styleUrls: ['./timeline-item.component.css'],
})
export class TimelineItemComponent {
	@Input({ required: true }) item!: IEducationItem;
}
