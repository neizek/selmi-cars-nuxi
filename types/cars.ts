import type { ImageSet } from './files';

export interface Make {
	id?: number;
	name: string;
	models?: Model[];
}

export interface Model {
	id?: number;
	name: string;
}

export interface CreateCar {
	makeId?: number;
	make?: Make;
	modelId?: number;
	model?: Model;
	price?: number;
	year?: number;
	mileage?: number;
	userId?: number;
	carImages?: number[];
}

export type Car = Required<CreateCar> & {
	id: number;
	carImages: ImageSet[];
};
