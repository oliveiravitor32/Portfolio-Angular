const MONTH_LABELS = [
	'Jan',
	'Fev',
	'Mar',
	'Abr',
	'Mai',
	'Jun',
	'Jul',
	'Ago',
	'Set',
	'Out',
	'Nov',
	'Dez',
];

function parseMonth(value: string): Date {
	const [year, month] = value.split('-').map(Number);
	return new Date(year, month - 1, 1);
}

function formatMonth(date: Date): string {
	return `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
}

function monthsBetween(start: Date, end: Date): number {
	const months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth()) +
		1;
	return Math.max(months, 1);
}

function formatDuration(totalMonths: number): string {
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	const parts: string[] = [];
	if (years > 0) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`);
	if (months > 0) parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`);

	return parts.join(' ');
}

export function buildExperiencePeriod(
	startDate: string,
	endDate?: string,
	today: Date = new Date(),
): string {
	const start = parseMonth(startDate);
	const end = endDate ? parseMonth(endDate) : today;
	const endLabel = endDate ? formatMonth(end) : 'o momento';

	return `${formatMonth(start)} - ${endLabel} · ${formatDuration(
		monthsBetween(start, end),
	)}`;
}
