export interface IEducationItem {
	institution_name: string;
	program_title: string;
	status: 'Cursando' | 'Em andamento' | 'Concluído';
	timePeriod?: string;
	details?: string[];
	logoUrl: string;
}
