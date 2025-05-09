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
