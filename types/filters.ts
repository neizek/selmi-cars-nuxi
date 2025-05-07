export type OrderByDirection = 'asc' | 'desc';

type RelativeField<T> = {
	[K in keyof T]?: T[K] extends object ? RelativeField<T[K]> : string;
};

export interface Filter<T> {
	where?: {
		[P in keyof T]?: T[P] extends object
			? RelativeField<T[P]>
			: string | number | boolean | null;
	};
	orderBy?: {
		[P in keyof T]?: OrderByDirection;
	};
}
