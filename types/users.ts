import type { Review } from './reviews';

export interface SingleUser {
	id: number;
	firstname: string;
	lastname: string;
	reviews: Review[];
	email: string;
	password: string;
}

export type UserSession = Omit<SingleUser, 'password'>;

export type UserSignInPayload = Pick<SingleUser, 'email' | 'password'>;

export type UserSignUpPayload = Omit<SingleUser, 'id'> & {
	repeatPassword: string;
};
