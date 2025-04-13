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
}