import { IExperienceItem } from '../interfaces/experience/experience-item.interface';

export const ExperienceData: IExperienceItem[] = [
	{
		company_name: 'ControlXRM - Software',
		role: 'Estágio Desenvolvedor full stack',
		employment_type: 'Estágio',
		startDate: '2026-04',
		location: 'São Paulo, São Paulo, Brasil',
		details: [
			'Atuando em aplicações SaaS B2B para grandes operadores de aeroportos e shoppings, contribuindo no desenvolvimento e evolução de sistemas críticos para a gestão dessas operações.',
			'Trabalho com C# / .NET / Razor e React, implementando novas funcionalidades, realizando manutenção evolutiva e correção de defeitos a partir das especificações técnicas definidas. Atuação em ambiente ágil Scrum, com colaboração próxima entre desenvolvimento e demais áreas envolvidas.',
		],
		skills: ['.NET Framework', 'React', 'C#', 'Razor', 'SQL', 'Scrum'],
		logoUrl: 'assets/logos/controlxrm-logo.jpg',
	},
];
