import type { Review } from './reviews';

export interface Entity {
	name: string;
	reviews: Review[];
}
