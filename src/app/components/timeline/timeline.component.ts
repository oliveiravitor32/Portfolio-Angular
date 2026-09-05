import { Component, Input } from '@angular/core';
import { ITimelineItem } from 'src/app/interfaces/timeline/timeline-item.interface';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
	@Input({ required: true }) items!: ITimelineItem[];
}
