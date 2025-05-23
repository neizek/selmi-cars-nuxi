export function toPriceFormat(price: number) {
	return `€ ${price.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ')}`;
}

export function slugify(str: string) {
	return String(str)
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function formatDateToDayMonth(date: Date | string | number): string {
	const d = date instanceof Date ? date : new Date(date);
	const day = d.getDate().toString().padStart(2, '0');
	const month = (d.getMonth() + 1).toString().padStart(2, '0');
	return `${day} / ${month}`;
}
