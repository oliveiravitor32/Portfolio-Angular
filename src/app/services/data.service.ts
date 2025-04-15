import { Injectable } from '@angular/core';
import { EducationData } from '../data/education-data';
import { ProjectsData } from '../data/projects-data';
import { IEducationData } from '../interfaces/education/education-data.interface';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private readonly educationData = EducationData;
	private readonly projectsData = ProjectsData;

	constructor() {}

	getEducationData(): IEducationData {
		return this.educationData;
	}

	getProjectsData() {
		return this.projectsData;
	}
}
