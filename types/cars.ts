export interface Make {
	id?: number;
	name: string;
	models?: Model[];
}

export interface Model {
	id?: number;
	name: string;
}

// export interface Car {
// 	id: number;
// 	makeId: number;
// 	modelId: number;
// }

export interface CreateCar {
	makeId?: number;
	make?: Make;
	modelId?: number;
	model?: Model;
	price?: number;
	year?: number;
	mileage?: number;
	userId?: number;
}

export interface Car extends Required<CreateCar> {
	id: number;
}
