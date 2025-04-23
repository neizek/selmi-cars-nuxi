export interface Make {
	id: number;
	name: string;
}

export interface Model {
	id: number;
	name: string;
}

export interface Car {
	id: number;
	makeId: number;
	modelId: number;
}

export interface CreateCar {
	makeId?: number;
	modelId?: number;
	price?: number;
	year?: number;
	mileage?: number;
	userId?: string;
}

export interface Filter {
	where?: {
		[prop: string]: string | number | boolean | null;
	}[];
	orderBy?: {
		[prop: string]: "asc" | "desc";
	};
}
