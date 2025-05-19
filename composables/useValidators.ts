import type { QInputProps, QSelect } from 'quasar';
import { useI18n } from 'vue-i18n';

export function useValidators() {
	const { t } = useI18n();

	return {
		required: (value: QInputProps['modelValue'] | QSelect['modelValue']) =>
			!!value || t('errors.required'),
		isEmail: (value: string) =>
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || t('errors.invalidEmail'),
		isPhone: (value: string) => /^\+?[1-9]\d{1,14}$/.test(value) || t('errors.invalidPhone'),
		minValue: (value: number, number: number) =>
			value >= number || `${t('errors.minValue')}: ${number}`,
		maxValue: (value: number, number: number) =>
			value <= number || `${t('errors.maxValue')}: ${number}`,
	};
}
