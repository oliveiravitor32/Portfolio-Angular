import { Injectable } from '@angular/core';
import { EducationData } from '../data/education-data';
import { ExperienceData } from '../data/experience-data';
import { ProjectsData } from '../data/projects-data';
import { IEducationData } from '../interfaces/education/education-data.interface';
import { IEducationItem } from '../interfaces/education/education-item.interface';
import { IExperienceItem } from '../interfaces/experience/experience-item.interface';
import { ITimelineItem } from '../interfaces/timeline/timeline-item.interface';
import { buildExperiencePeriod } from '../utils/experience-period.util';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private readonly educationData = EducationData;
	private readonly experienceData = ExperienceData;
	private readonly projectsData = ProjectsData;

	constructor() {}

	getEducationData(): IEducationData {
		return this.educationData;
	}

	getEducationTimeline(): ITimelineItem[] {
		return [
			this.educationData.degree,
			...this.educationData.certifications,
		].map((item) => this.toTimelineItem(item));
	}

	getExperienceTimeline(): ITimelineItem[] {
		return this.experienceData.map((item) =>
			this.toExperienceTimelineItem(item),
		);
	}

	getProjectsData() {
		return this.projectsData;
	}

	private toTimelineItem(item: IEducationItem): ITimelineItem {
		return {
			logoUrl: item.logoUrl,
			logoAlt: `Logo da instituição ${item.institution_name}`,
			meta: item.timePeriod
				? `${item.status}: ${item.timePeriod}`
				: item.status,
			title: item.institution_name,
			subtitle: item.program_title,
			details: item.details,
		};
	}

	private toExperienceTimelineItem(item: IExperienceItem): ITimelineItem {
		const period = buildExperiencePeriod(item.startDate, item.endDate);

		return {
			logoUrl: item.logoUrl,
			logoAlt: `Logo da empresa ${item.company_name}`,
			meta: period,
			title: item.role,
			subtitle: `${item.company_name} · ${item.employment_type}`,
			location: item.location,
			details: item.details,
			skills: item.skills,
		};
	}
}
