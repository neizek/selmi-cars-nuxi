export interface SingleUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export type UserSession = Omit<SingleUser, "password">;

export type UserSignInPayload = Pick<SingleUser, "email" | "password">;

export type UserSignUpPayload = Omit<SingleUser, "id"> & {
	repeatPassword: string;
};
