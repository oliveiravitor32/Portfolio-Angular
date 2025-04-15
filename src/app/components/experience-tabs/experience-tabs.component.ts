import { Component } from '@angular/core';
import { IEducationData } from 'src/app/interfaces/education/education-data.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-experience-tabs',
	templateUrl: './experience-tabs.component.html',
	styleUrls: ['./experience-tabs.component.css'],
})
export class ExperienceTabsComponent {
	educationData!: IEducationData;

	constructor(private _dataService: DataService) {}

	ngOnInit(): void {
		this.fetchEducationData();
	}

	private fetchEducationData(): void {
		this.educationData = this._dataService.getEducationData();
	}
}
