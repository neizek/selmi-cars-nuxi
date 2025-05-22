import type { ImageSet } from './files';
import type { SingleUser } from './users';

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
	user?: SingleUser;
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
	rate: number;
};

export interface CarParameter {
	[prop: string]: {
		icon: string;
		label: string;
		value: string;
		side?: string;
	};
}
