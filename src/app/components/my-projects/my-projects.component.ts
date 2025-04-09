import { Component, OnInit } from '@angular/core';
import { IProjectsData } from 'src/app/interfaces/projects/projects-data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {
	projectsData: IProjectsData = {} as IProjectsData;

	constructor(private readonly _dataService: DataService) {}

	ngOnInit(): void {
		this.fetchProjectsData();
	}

	private fetchProjectsData(): void {
		this.projectsData = this._dataService.getProjectsData();
	}
}
