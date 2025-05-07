export function slugify(str: string) {
	return String(str)
		.normalize('NFKD') // Split accented characters into base + diacritics
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritics
		.toLowerCase() // Convert to lowercase
		.trim() // Trim whitespace
		.replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric, non-space, non-hyphen
		.replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and multiple hyphens with single hyphen
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
