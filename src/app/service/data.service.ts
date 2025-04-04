import { Injectable } from '@angular/core';
import { EducationData } from '../data/education-data';
import { IEducationData } from '../interfaces/education/education-data.interface';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private readonly educationData = EducationData;
	constructor() {}

	getEducationData(): IEducationData {
		return this.educationData;
	}
}
