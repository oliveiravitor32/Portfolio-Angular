import { Component, Input } from '@angular/core';
import { ITimelineItem } from 'src/app/interfaces/timeline/timeline-item.interface';

@Component({
	selector: 'app-timeline-item',
	templateUrl: './timeline-item.component.html',
	styleUrls: ['./timeline-item.component.css'],
})
export class TimelineItemComponent {
	@Input({ required: true }) item!: ITimelineItem;
}
