import type { ImageSet } from './files';

export interface Make {
	id?: number;
	name: string;
	slug: string;
	models?: Model[];
}

export interface Model {
	id?: number;
	name: string;
	slug: string;
}

export enum TransmissionType {
	AUTOMATIC = 'AUTOMATIC',
	MANUAL = 'MANUAL',
}

export enum BodyStyle {
	SEDAN = 'SEDAN',
	SUV = 'SUV',
	HATCHBACK = 'HATCHBACK',
	COUPE = 'COUPE',
	CONVERTIBLE = 'CONVERTIBLE',
	WAGON = 'WAGON',
	VAN = 'VAN',
	TRUCK = 'TRUCK',
	CROSSOVER = 'CROSSOVER',
	MINIVAN = 'MINIVAN',
}

export enum FuelType {
	GASOLINE = 'GASOLINE',
	DIESEL = 'DIESEL',
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
	carImages?: ImageSet[];
	transmissionType?: TransmissionType;
	bodyStyle?: BodyStyle;
	fuelType?: FuelType;
	engineVolume?: number;
	views?: View[];
}

export interface View {
	id?: number;
	carId?: number;
	userId?: number;
}

export type Car = Required<CreateCar> & {
	id: number;
	createdAt: Date;
};

export type ContactCard = {
	name: string;
	isEntity: boolean;
};
