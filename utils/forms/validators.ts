export function required(value: any) {
	return value && value.length > 0 || 'Это обязательное поле'
}

export function isEmail(value: any) {
	const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
	return value.match(emailRegex) || 'Некорректная эл. почта'
} 