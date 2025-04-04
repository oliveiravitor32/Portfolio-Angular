import { IEducationData } from '../interfaces/education/education-data.interface';

export const EducationData: IEducationData = {
	degree: {
		institution_name: 'UNIP - Universidade Paulista',
		program_title: 'Graduação em Ciência da Computação',
		status: 'Cursando',
		timePeriod: 'Fev 2023 - Dez 2026',
		details: [],
		logoUrl: 'assets/logos/unip-logo.png',
	},
	certifications: [
		{
			institution_name: 'Udemy',
			program_title: 'Programação Orientada a Objetos com Java',
			status: 'Concluído',
			logoUrl: 'assets/logos/udemy-logo.png',
		},
		{
			institution_name: 'Udemy',
			program_title: 'Angular Básico ao Avançado',
			status: 'Em andamento',
			logoUrl: 'assets/logos/udemy-logo.png',
		},
	],
};
