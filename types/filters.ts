export type OrderByDirection = 'asc' | 'desc';

// export interface Filter {
// 	where?: {
// 		[prop: string]: string | number | boolean | null;
// 	}[];
// 	orderBy?: {
// 		[prop: string]: OrderByDirection;
// 	};
// }

export interface Filter<T> {
	where?: {
		[P in keyof T]?: string | number | boolean | null;
	};
	orderBy?: {
		[P in keyof T]?: OrderByDirection;
	};
}
