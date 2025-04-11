import { Component, Input, OnInit } from '@angular/core';
import { IProjectsData } from 'src/app/interfaces/projects/projects-data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {
	@Input() limit: number = 0;
	projectsData: IProjectsData = {} as IProjectsData;

	constructor(private readonly _dataService: DataService) {}

	ngOnInit(): void {
		this.fetchProjectsData();
	}

	private fetchProjectsData(): void {
		this.projectsData = this._dataService.getProjectsData();
		if (this.limit === 0) {
			this.limit = this.projectsData.projects.length;
		}
	}
}
