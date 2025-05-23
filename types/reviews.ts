import type { SingleUser } from './users';

export interface Review {
	id: number;
	userId: number;
	text: string;
	rate: number;
	author: Partial<SingleUser>;
}
